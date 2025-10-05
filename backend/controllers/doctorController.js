import doctorModel from "../models/doctorModel.js"


const changeAvailablity = async (req, res) => {
    try {

        const { docId } = req.body
        
        const docData = await doctorModel.findById(docId)
        await doctorModel.findByIdAndUpdate(docId, { available: !docData.available })
        res.json({ success: true, message: 'Doctor availability changed successfully.' })
        
    } catch (error) {
        console.log(error)
        const { docId } = req.body
        res.json({ success: false, message: error.message + docId })
    }
}

export { changeAvailablity }