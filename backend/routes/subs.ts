// express
import express from "express";
// subscription controllers
import {
    prices,
    createSubscription,
    subscriptionStatus,
    subscriptions,
    customerPortal
} from '../controllers/subs';
// express-jwt middleware
import {requireSignin} from '../middlewares';

const router = express.Router();

router.get('/prices', prices);
router.post('/create-subscription', requireSignin, createSubscription);
router.get('/subscription-status', requireSignin, subscriptionStatus);
router.get('/subscriptions', requireSignin, subscriptions);
router.get('/customer-portal', requireSignin, customerPortal);

export default router;