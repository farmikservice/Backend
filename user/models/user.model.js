import mongoose from "mongoose"

const userSchema = new mongoose.Schema({

    fullName : {
        type : String,
        required : true
    },

    phoneNumber : {
        type : String,
        required : true,
        unique : true,
        max : 13
    }
},
    {timestamps : true}
)

const User = mongoose.model('User', userSchema)
export default User