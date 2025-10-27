import models from '../models/models.js';

const { OrderItem } = models;

export const getOrdersItems = async(reg, res, next) => {
    try {
        const data = await OrderItem.findAll(); 

        res.status(200).json(data)
    }
    catch(err){
        next(err)
    };
};

export const postOrdersItems = async(reg, res, next) => {
    try {
        const data = await OrderItem.create(); 

        res.status(200).json(data)
    }
    catch(err){
        next(err)
    };
};