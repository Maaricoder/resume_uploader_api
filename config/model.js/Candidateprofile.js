import mongoose, { Schema } from "mongoose";


const candidateschema = new mongoose.Schema({
    name:{type:String,required:true,trim:true},

    email:{type:String,required:true,trim:true},

    dob:{type:Date},

    state:{type:String},

    gender:{type:String}, 

    location:{type:String},

    resume_file:{type:String,required:true},

  


})

const candidateprofile_model = mongoose.model("candidateprofile",candidateschema);
export default candidateprofile_model;
