import express from 'express'
import CandidateprofileController from '../controller/candidateProfilecontroller.js';
import upload from '../middleware/upload.middleware.js';

const router = express.Router();
        router.use(upload.single("resume_file"))
        router.post('/resume',CandidateprofileController.saveProfile);

        router.get("/list",CandidateprofileController.profile_list)
        // router.post()
       



export default router;