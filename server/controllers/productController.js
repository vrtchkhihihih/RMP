import models from '../models/models.js';

const { Product } = models;

export const getProducts = async(reg, res, next) => {
    try {
        const data = await Product.findAll(); 

        res.status(200).json(data)
    }
    catch(err){
        next(err)
    };
};

export const postProducts = async(reg, res, next) => {
    try {
        const data = await Product.create(); 

        res.status(200).json(data)
    }
    catch(err){
        next(err)
    };
};
