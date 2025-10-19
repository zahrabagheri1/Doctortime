import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import doctorModel from "../models/doctorModel.js"
import appointmentModel from "../models/appointmentModel.js"

// API for change doctor avaiblity
export const changeAvailablity = async (req, res) => {
    try {

        const { docId } = req.doctor

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
            return res.json({ success: false, message: 'Invalid credentials!' })
        }

        const isMatch = await bcrypt.compare(password, doctor.password)

        if (isMatch) {
            const token = jwt.sign({ id: doctor._id }, process.env.JWT_SECRET)
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
        const { docId } = req.doctor
        // console.log(req.doctor)
        const appointmnets = await appointmentModel.find({ docId })
        res.json({ success: true, appointmnets })

    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}

// API to agreed appointment completed for doctor panel
export const appointmentComplete = async (req, res) => {
    try {
        const { docId } = req.doctor
        const { appointmentId } = req.body
        const appointmentData = await appointmentModel.findById(appointmentId)

        if (appointmentData && appointmentData.docId === docId) {
            await appointmentModel.findByIdAndUpdate(appointmentId, { isCompleted: true })
            return res.json({ success: true, message: 'Appointment Completed' })
        } else {
            return res.json({ success: false, message: "Agreed Failed" })
        }

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// API to cancel appointment for doctor panel
export const appointmentCancel = async (req, res) => {
    try {
        const { docId } = req.doctor
        const { appointmentId } = req.body
        const appointmentData = await appointmentModel.findById(appointmentId)
        // console.log(req.body)

        if (appointmentData && appointmentData.docId === docId) {
            await appointmentModel.findByIdAndUpdate(appointmentId, { cancelled: true })
            return res.json({ success: true, message: 'Appointment Cancelled' })
        } else {
            return res.json({ success: false, message: "Cancelled Failed" })
        }

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// API to get dashboard data for doctor panel
export const doctorDashboard = async(req,res)=>{
     try {

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}
