import Router from 'express'
import clientRouter from './clientRouter.js'
import orderItemRouter from './orderItemRouter.js'

const router = new Router();

router.use('/client', clientRouter )
router.use('/orderItem', orderItemRouter)
export default router

