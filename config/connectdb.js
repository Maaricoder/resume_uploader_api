import mongoose from 'mongoose'

const DBconnet= async (DATABASE_URL)=>{
    try {
        const db_option ={
            DBname:"resumeUploder"
        } 

        mongoose.set("strictQuery", false);
      await  mongoose.connect(DATABASE_URL, db_option)
        console.log('DB connected succefully')
    } catch (error) {
        
    }
}


export default DBconnet;