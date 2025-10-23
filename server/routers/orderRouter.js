import Router from 'express';
import {getOrders} from '../controllers/orderController.js'
import {postOrders} from '../controllers/orderController.js'

const router = new Router();

router.get('/getOrders', getOrders);
router.post('/postOrders', postOrders);


export default router