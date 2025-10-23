import Router from 'express';
import {getClients} from '../controllers/clientController.js'
import {postClients} from '../controllers/clientController.js'

const router = new Router();

router.get('/getClients', getClients);
router.post('/postClients', postClients)


export default router