import mongoose from "mongoose";
import Admin from "./admin/models/admin.model.js";
import bcrypt from "bcryptjs";

mongoose.connect('mongodb+srv://farmikservices:drwyoseBknZSX4SW@farmik.xxngnlv.mongodb.net/FarmikDB?retryWrites=true&w=majority&appName=Farmik')

async function addAdmin() {

    const password = '123456'
    const hashedPassword = await bcrypt.hash(password, 10)
    await Admin.create({
        uid : 1001,
        name : "Admin",
        password : hashedPassword
    })

    console.log('Admin created')
}

addAdmin()