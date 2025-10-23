import models from '../models/models.js';

const { OrderItem } = models;

export const getOrdersItems = async(reg, res) => {
    try {
        const data = await OrderItem.findAll(); 

        res.status(200).json(data)
    }
    catch(error){
        res.status(500).json({
            message: "ошибка сервера при получения данных"
        });
    };
};

export const postOrdersItems = async(reg, res) => {
    try {
        const data = await OrderItem.create(); 

        res.status(200).json(data)
    }
    catch(error){
        res.status(500).json({
            message: "ошибка сервера при получения данных"
        });
    };
};