import Router from 'express'
import clientRouter from './clientRouter.js'


const router = new Router();

router.use('/client', clientRouter )

export default router
