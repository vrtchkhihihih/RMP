import models from '../models/models.js';

const { Order } = models;

export const getOrders = async(reg, res) => {
    try {
        const data = await Order.findAll(); 

        res.status(200).json(data)
    }
    catch(error){
        res.status(500).json({
            message: "ошибка сервера при получения данных"
        });
    };
};

export const postOrders = async(reg, res) => {
    try {
        const data = await Order.create(); 

        res.status(200).json(data)
    }
    catch(error){
        res.status(500).json({
            message: "ошибка сервера при получения данных"
        });
    };
};
