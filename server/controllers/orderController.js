import models from '../models/models.js';

const { Order } = models;

export const getOrders = async(reg, res, next) => {
    try {
        const data = await Order.findAll(); 

        res.status(200).json(data)
    }
    catch(error){
        next(err)
    };
};

export const postOrders = async(reg, res, next) => {
    try {
        const data = await Order.create(); 

        res.status(200).json(data)
    }
    catch(err){
        next(err)
    };
};
