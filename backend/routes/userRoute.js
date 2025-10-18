import express from 'express'
import { registerUser, loginUser, getProfile, updateProfile, bookAppointment, listAppointment, cancelappointment, paymentStripe, getStripeSessionStatus } from '../controllers/userController.js'
import authUser from '../middlewares/authUser.js'
import upload from '../middlewares/mullter.js'


const userRouter = express.Router()

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)

userRouter.get('/get-profile', authUser, getProfile)
userRouter.post('/update-profile', upload.single('image'), authUser, updateProfile)
userRouter.post('/book-appointment', authUser, bookAppointment)
userRouter.get('/appointments', authUser, listAppointment)
userRouter.post('/cancel-appointment', authUser, cancelappointment)
userRouter.post('/payment-stripe', authUser, paymentStripe)
userRouter.get('/payment-stripe-status', authUser, getStripeSessionStatus)



export default userRouter

