import Router from 'express'
import clientRouter from '../routers/clientRouter.js'
import orderRouter from '../routers/orderRouter.js'
import orderItemRouter from '../routers/orderItemRouter.js'
import productRouter from '../routers/productRouter.js'

const router = new Router();

router.use('/client', clientRouter )
router.use('/order', orderRouter )
router.use('/orderItem', orderItemRouter)
router.use('/product', productRouter)


export default router

