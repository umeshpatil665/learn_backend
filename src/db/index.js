import mongoose from "mongoose"
import { DB_NAME } from "../constant.js"


const connectDB=async()=>{
    try {
        const connectionInstance=await mongoose.connect(`${process.env.MONGOBD_URL}/${DB_NAME}`)
        console.log(`\n db connected ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log(`ERROR:`,error)
        process.exit('1')
    }
}

export default connectDB