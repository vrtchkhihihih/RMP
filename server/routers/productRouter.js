import Router from 'express';
import {getProducts} from '../controllers/productController.js'
import {postProducts} from '../controllers/productController.js'

const router = new Router();

router.get('/getProducts', getProducts);
router.post('/postProducts', postProducts);


export default router