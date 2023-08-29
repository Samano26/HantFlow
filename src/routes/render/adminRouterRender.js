import express from 'express'

const router = express.Router()

router.get('/log', (req, res) => res.render('Layout'));
router.get('/reg', (req, res) => res.render('Layout'));

export default router;