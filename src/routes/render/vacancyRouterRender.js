
import express from 'express'
import { Vacancy } from '../../../db/models';



const router = express.Router();

router.get('/', async (req, res) => {
  const vacancies = await Vacancy.findAll();
  const initState = { vacancies };
  res.render('Layout', initState);
});

router.get('/new', (req, res) => res.render('Layout'));

router.get('/:id', async (req, res) => {
  const oneVacancy = await Vacancy.findByPk(req.params.id);
  const initState = { oneVacancy };
  res.render('Layout', initState);
});

export default router;
