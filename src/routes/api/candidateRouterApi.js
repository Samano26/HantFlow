import express from 'express';
import { Candidat } from '../../../db/models'

const candidateRouterApi = express.Router();

candidateRouterApi.post("/:id", async (req, res) => {

    const oneperson = await Candidat.findOne({where: {id: req.params.id}})
    // console.log(oneperson);
    return res.status(200).json(oneperson)
})
candidateRouterApi.post("/status/:id", async (req, res) => {

    const oneperson = await Candidat.findAll({where: {id: req.params.id}})
    // console.log(oneperson);
    return res.status(200).json(oneperson)
})

export default candidateRouterApi;