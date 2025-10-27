import Router from 'express';
import {getProducts, postProducts} from '../controllers/productController.js'

const router = new Router();
router.get('/getProducts', getProducts);
router.post('/postProducts', postProducts);


export default router