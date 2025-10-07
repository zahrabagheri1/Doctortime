import mongoose from 'mongoose'

const appointmentSchema = new mongoose.Schema({
    userId: { type: String, require: true },
    docId: { type: String, require: true },
    sloctDate: { type: String, require: true },
    slotTime: { type: String, require: true },
    userData: { type: String, require: true },
    docDate: { type: Object, require: true },
    amount: { type: Object, require: true },
    date: { type: Number, require: true },
    cancelled: { type: Boolean, default: false },
    payment: { type: Boolean, default: false },
    isCompleted: { type: Boolean, default: false },
})

const appointmentModel = mongoose.models.appointment || mongoose.model('appointment', appointmentSchema)

export default appointmentModel