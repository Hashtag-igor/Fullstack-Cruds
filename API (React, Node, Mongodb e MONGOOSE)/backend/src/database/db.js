import mongoose from "mongoose"

export default async function ConnectDatabase(){
   await mongoose.connect(process.env.DATABASE_URL)
}
