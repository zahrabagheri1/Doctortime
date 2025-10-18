import doctorModel from "../models/doctorModel.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import appointmentModel from "../models/appointmentModel.js"

// API for change doctor avaiblity
export const changeAvailablity = async (req, res) => {
    try {

        const { docId } = req.body

        const docData = await doctorModel.findById(docId)
        await doctorModel.findByIdAndUpdate(docId, { available: !docData.available })
        res.json({ success: true, message: 'Doctor availability changed successfully.' })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// API for doctor list
export const doctorList = async (req, res) => {
    try {
        const doctors = await doctorModel.find({}).select(['-password', '-email'])
        res.json({ success: true, doctors })

    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}

// API for doctor Login
export const loginDoctor = async (req, res) => {
    try {
        const { email, password } = req.body
        const doctor = await doctorModel.findOne({ email })

        if (!doctor) {
            return res.json({ success: false, message: 'Invalid credentials' })
        }

        const isMatch = await bcrypt.compare(password, doctor.password)
        if (isMatch) {
            const token = jwt.sign({ id: doctor._id }, process.env.JWT_SECTET)
            res.json({ success: true, token })
        } else {

            res.json({ success: false, message: "Invalid credentials" })
        }

    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}

// API to get doctor appointmnets for doctor panel
export const appointmentsDoctor = async (req, res) => {
    try {
        const { docId } = req.body
        const appointmnets = await appointmentModel.findOne({ docId })
        res.json({ success: true, appointmnets })

    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}