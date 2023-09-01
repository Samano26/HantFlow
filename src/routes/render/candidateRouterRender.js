import express from 'express';

import { Candidat, Status, Vacancy } from '../../../db/models';

const router = express.Router();



// router.get('/', (req, res) => res.render('Layout'));
router.get('/new', (req, res) => res.render('Layout'));

// router.post('status/:id/', async (req, res) => {
//   const { id } = req.params;
//   const allCandidates = await Candidat.findAll({where:{statusId:id}});
//   // const allStatus = await Status.findAll();
//   // const vacancies = await Vacancy.findAll();
//   // const initState = {
//   //   allCandidates,
//   //   allStatus,
//   //   vacancies,
//   // };
//   return res.status(200).json(allCandidates);
//   // ('Layout', initState);
// });
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const allCandidates = await Candidat.findAll({where:{vacaincyId:id}});
  const allStatus = await Status.findAll();
  const vacancies = await Vacancy.findAll();
  const initState = {
    allCandidates,
    allStatus,
    vacancies,
  };
  res.render('Layout', initState);
});

// router.get('/:id', (req, res) => res.render('Layout')); // /new -> id === new

export default router;
