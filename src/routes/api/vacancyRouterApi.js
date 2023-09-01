import express from 'express';
import { Vacancy } from '../../../db/models';

const router = express.Router();

router.post('/addVacancy', async (req, res) => {
    const newVacancy = await Vacancy.create(req.body);
    res.json(newVacancy);

});

router.post('/editVacancy', async (req, res) => {
    const { id, nameVacancy } = req.body
    const newVacancy = await Vacancy.findByPk(id);
    newVacancy.nameVacancy = nameVacancy
    await newVacancy.save()
    // res.status(200).json(newVacancy)
    res.sendStatus(200)


});

router.get('/deleteVacancy/:id', async (req, res) => {
    try {
        await Vacancy.destroy({ where: { id: req.params.id } });
        return res.sendStatus(200);
    } catch (err) {
        return res.sendStatus(500);
    }
});

export default router;
