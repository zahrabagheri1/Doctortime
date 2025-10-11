import validator from 'validator'
import bcrypt from 'bcrypt'
import userModel from '../models/userModel.js'
import jwt from 'jsonwebtoken'
import { v2 as cloudinary } from 'cloudinary'
import doctorModel from '../models/doctorModel.js'
import appointmentModel from '../models/appointmentModel.js'
import Stripe from 'stripe'

// API to register user
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body

        const missingFields = []
        if (!name) missingFields.push("name")
        if (!email) missingFields.push("email")
        if (!password) missingFields.push("password")
        if (missingFields.length > 0) {
            return res.json({ success: false, message: `Please provide all required field(s): ${missingFields.join(',')}.` })
        }

        // validating email format
        if (!validator.isEmail(email)) return res.json({ success: false, message: 'enter a valid email.' })

        // validating strong password
        if (password.length < 8) return res.json({ success: false, message: 'enter a strong password.' })

        // hashing user password
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)

        const userData = {
            name, email, password: hashPassword
        }


        const newUser = new userModel(userData)
        const user = await newUser.save()

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
        res.json({ success: true, token })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// API for user login
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await userModel.findOne({ email })

        if (!user) return res.json({ success: false, message: "User does not exist." })

        const isMatch = await bcrypt.compare(password, user.password)

        if (isMatch) {
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
            res.json({ success: true, token })
        } else {
            res.json({ success: false, message: "Invalid credentials." })
        }


    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// API to get user profile data
const getProfile = async (req, res) => {
    try {
        const { userId } = req.user
        const userData = await userModel.findById(userId).select('-password')

        res.json({ success: true, userData })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// API to update user profile
const updateProfile = async (req, res) => {
    try {
        const { name, phone, address, dob, gender } = req.body
        const userId = req.user.userId;
        const imageFile = req.file

        if (!name || !phone || !address || !dob || !gender) {
            return res.json({ success: false, message: 'data missing' })
        }

        await userModel.findByIdAndUpdate(userId, { name, phone, address: JSON.parse(address), dob, gender })

        if (imageFile) {
            // upload image to cloudinary
            const imageUplod = await cloudinary.uploader.upload(imageFile.path, { resoutce_type: 'image' })
            const imageURL = imageUplod.secure_url

            await userModel.findByIdAndUpdate(userId, { image: imageURL })
        }

        res.json({ success: true, message: 'Profile Updated' })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// API to book appointment
const bookAppointment = async (req, res) => {
    try {
        const { userId, docId, slotDate, slotTime } = req.body
        const docData = await doctorModel.findById(docId).select('-password')

        if (!docData.available) {
            return res.json({ success: false, message: 'Doctor not available' })
        }

        let slotsBooked = docData.slotsBooked

        // checking for slot availablity
        if (slotsBooked[slotDate]) {
            if (slotsBooked[slotDate].includes(slotTime)) {
                return res.json({ success: false, message: 'Slot not available' })

            } else {
                slotsBooked[slotDate].push(slotTime)
            }
        } else {
            slotsBooked[slotDate] = []
            slotsBooked[slotDate].push(slotTime)
        }

        const userData = await userModel.findById(userId).select('-password')
        delete docData.slotsBooked

        const appointmentData = {
            userId,
            docId,
            userData,
            docData,
            amount: docData.fees,
            slotTime,
            slotDate,
            date: Date.now()
        }

        const newAppointment = new appointmentModel(appointmentData)
        await newAppointment.save()

        // save new slots data in doctorData
        await doctorModel.findByIdAndUpdate(docId, { slotsBooked })
        res.json({ success: true, message: 'Appointment Booked' })

    }

    catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// API to get usessr appointments for frontend my-appointment page
const listAppointment = async (req, res) => {
    try {
        const { userId } = req.query
        const appointments = await appointmentModel.find({ userId })
        res.json({ success: true, appointments })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.messsage })
    }
}

// API to cancel appointment
const cancelappointment = async (req, res) => {
    try {
        const { userId, appointmentId } = req.body
        const appointmentData = await appointmentModel.findById(appointmentId)

        // verify appointment user
        if (appointmentData.userId !== userId) {
            return res.json({ success: false, message: ' Unauthorized action' })
        }

        await appointmentModel.findByIdAndUpdate(appointmentId, { cancelled: true })

        // releasing doctor slot
        const { docId, slotDate, slotTime } = appointmentData
        const doctorData = await doctorModel.findById(docId)
        let slotsBooked = doctorData.slotsBooked

        slotsBooked[slotDate] = slotsBooked[slotDate].filter(e => e != slotTime)
        await doctorModel.findByIdAndUpdate(docId, { slotsBooked })
        res.json({ success: true, message: 'Appointment cancelled !' })


    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

const stripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2025-09-30.clover",
});


// API to make payment of appointment using Stripe
const paymentStripe = async (req, res) => {
    try {
        const { appointmentId } = req.body
        // find appointment
        const appointmentData = await appointmentModel.findById(appointmentId)

        if (!appointmentData || appointmentData.cancelled) {
            return res.json({ success: false, message: 'Appointment cancelled or not found' })
        }

        // create   a payment intent
        const paymentIntent = await stripeInstance.paymentIntents.create({
            amount: appointmentData.amount * 100, // convert to cents
            currency: process.env.CURRENCY || 'aud',
            description: `Payment for appointment ${appointmentId}`,
            metadata: { appointmentId },
            automatic_payment_methods: { enabled: true }
        })

        // return client secret to frontend
        res.json({ success: true,  paymentIntent });

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })

    }
}

export {
    registerUser,
    loginUser,
    getProfile,
    updateProfile,
    bookAppointment,
    listAppointment,
    cancelappointment,
    paymentStripe
}