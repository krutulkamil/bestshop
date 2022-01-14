import express from "express";
import {prices, createSubscription} from '../controllers/subs';
import {requireSignin} from '../middlewares';

const router = express.Router();

router.get('/prices', prices);
router.post('/create-subscription', requireSignin, createSubscription);

module.exports = router;