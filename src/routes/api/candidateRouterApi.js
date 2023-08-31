import express from 'express';
import { Candidate } from '../../../db/models';

const apiRouter = express.Router();

apiRouter.post('/addCandidate', async (req, res) => {
  const { name, email, gender, tel, experience, statusId, vacaincyId, age, salary } = req.body;
  try {
    const newCandidate = await Candidate.create({
      nameCandidats: name,
      age,
      emailCandidate: email,
      gender,
      salary,
      experience,
      tel,
      vacaincyId,
      statusId,
    });
    return res.status(200).json(newCandidate);
  } catch (e) {
    console.log(e);
  }
});

export default apiRouter;
