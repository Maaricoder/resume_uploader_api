import mongoose from 'mongoose'

const DBconnet= async (DATABASE_URL)=>{
    try {
        const db_option ={
            DBname:"resumeUploder"
        } 


      await  mongoose.connect(DATABASE_URL, db_option)
        console.log('DB connected succefully')
    } catch (error) {
        
    }
}


export default DBconnet;