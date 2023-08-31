import express from 'express';
import { Vacancy } from '../../../db/models';

const router = express.Router();

router.post('/addVacancy', async (req, res) => {
    const newVacancy = await Vacancy.create(req.body);
    res.json(newVacancy);
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
