import candidateprofile_model from '../config//model.js/Candidateprofile.js'


class CandidateprofileController {
    static saveProfile= async(re,res)=>{
        // console.log(re.file)
        console.log(re.body)
        // res.send('hello')

        try {


            const {name,email,dob,st,gender,pjl} =  re.body;

         const resume_file = re.file.filename;

        //   console.log(resume_file)

         if(name && email && resume_file){

            const doc = new candidateprofile_model({
                name:name,
                email:email,
                dob:dob,
                state:st,
                gender:gender,
                location:pjl,
                resume_file:resume_file


            })
            

            const candidate = await doc.save();
            // res.send("done")

              res.status(201).send({"status":"success","smg":"re send succesfully","candidate":candidate})

        }else{
            res.status(200).send({"status":"failed","smg":"All feild are compalsary"})
         }
            
         } catch (error) {

            // res.send(error)
            console.log('this is error',error)
            
        }
    }

    static profile_list = async (re,res)=>{

        try {
            const candidates = await candidateprofile_model.find();
            res.status(200).send({"status":"success","candidate":candidates }) 
            
        } catch (error) {
            console.log(error)
            
        }

    }
}


export default CandidateprofileController;