import Router from 'express';
import {getOrdersItems, postOrdersItems} from '../controllers/orderItemController.js'

const router = new Router();

router.get('/getorderItems', getOrdersItems);
router.post('/postorderItems', postOrdersItems);

export default router