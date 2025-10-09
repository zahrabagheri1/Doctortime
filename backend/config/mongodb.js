import mongoose from "mongoose";

const connectDB = async () => {

    // mongoose.connection.on('connected', () => console.log("Database Connected"))
    // await mongoose.connect(`${process.env.MONGODB_URI}/doctortime`)
    // await mongoose.connect(process.env.MONGODB_URI)
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'doctortime',
        });
        
        console.log('Database Connected');
    } catch (err) {
        console.error('Database connection error:', err);
        process.exit(1); //Exit the program in case of error
    }


}

export default connectDB















