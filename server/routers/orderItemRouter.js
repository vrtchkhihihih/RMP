import models from '../models/models.js';
import Router from 'express';

const orderItemRouter = new Router();
const { OrderItem } = models;

orderItemRouter.get('/list', async(reg, res) => {
    try {
        const getorderItem = await OrderItem.findAll();
        res.status(200).json(getorderItem)
    }
    catch(error){
        res.status(500).json({
            message: "ошибка сервера при получения данных"
        });
    };
});


export default orderItemRouter