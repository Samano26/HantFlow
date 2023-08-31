import express from 'express'
import authCheck from "../../middlewares/authCheck"

const router = express.Router()

router.get('/log', authCheck(false), (req, res) => res.render('Layout'));
router.get('/reg', authCheck(false),  (req, res) => res.render('Layout'));

export default router;