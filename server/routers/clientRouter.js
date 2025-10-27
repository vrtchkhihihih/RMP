import Router from 'express';
import {getClients, postClients, getOneClient, deleteClient} from '../controllers/clientController.js'

const router = new Router();

router.get('/getClients', getClients);
router.get('/:id', getOneClient)
router.post('/postClients', postClients)
router.delete('/:id', deleteClient)

export default router