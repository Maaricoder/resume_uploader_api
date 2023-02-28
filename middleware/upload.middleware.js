import multer from "multer";


const upload = multer({ dest:'public/uploads/resume_file' })



// const upload = multer({
//     storage:multer.diskStorage({
//         destination:(re,file,cb)=>{
//             cb(null,`public/uploads/${file.fieldname}`)
//         },
//         filename:function(re,file,cb){
//             cb(null,`${Date.now()}-${file.originalname}`)
//         }
//     })
// })

export default upload;