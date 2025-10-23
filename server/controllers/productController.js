import models from '../models/models.js';

const { Product } = models;

export const getProducts = async(reg, res) => {
    try {
        const data = await Product.findAll(); 

        res.status(200).json(data)
    }
    catch(error){
        res.status(500).json({
            message: "ошибка сервера при получения данных"
        });
    };
};

export const postProducts = async(reg, res) => {
    try {
        const data = await Product.create(); 

        res.status(200).json(data)
    }
    catch(error){
        res.status(500).json({
            message: "ошибка сервера при получения данных"
        });
    };
};
