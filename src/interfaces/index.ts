import {Document, Model} from "mongoose";

export interface IUserDocument extends Document {
    first_name:string;
    last_name:string;
    email:string;
    location:string;
    phone_number:string;
}

export interface IUser extends IUserDocument {

}


export interface IUserModel extends Model<IUser>{
    
}