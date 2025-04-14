import mongoose, { Document } from "mongoose";

interface UserDocument extends Document {
    firstname: string;
    lastname: string; 
    email: string;
    password: string;
}

const UserSchema = new mongoose.Schema(
    {
        firstname:{
            type:String,
            required: true,
            min:2,
            max:50,
        },
        lastname:{
            type:String,
            required: true,
            min:2,
            max:50,
        },
        email:{
            type:String,
            required: true,
            max:50,
            unique: true,
        },
        password:{
            type:String,
            required: true,
            min:5,
        },
        
    },
    {timestamps: true}
)

const User = mongoose.model<UserDocument>("User",UserSchema);

export default User;


