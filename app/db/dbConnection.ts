import mongoose from "mongoose";

// db connection handler
export async function dbConnectionHandler(){
    try {
        const mongoDBUri = process.env.MONGO_DB_URI || ""
        if(mongoose.connections[0].readyState) {
            return
        }
        await mongoose.connect(mongoDBUri)
        console.log("db connected successfully")
    } catch (err) {
        console.log(err)
        process.exit(-1)
    }
}