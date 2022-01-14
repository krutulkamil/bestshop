import express from "express";
import {prices} from '../controllers/subs'

const router = express.Router();

router.get('/prices', prices);

module.exports = router;