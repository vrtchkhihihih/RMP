import models from '../models/models.js';

const { Client } = models;

export const getClients = async(reg, res, next) => {
    try {
        const data = await Client.findAll(); 

        res.status(200).json(data)
    }
    catch(error){
        next(err)
    };
};


export const postClients = async(reg, res, next) => {
    try {
        const {name, raiting, age} = req.body;
        const data = await Client.create({name, raiting, age}); 

        res.status(201).json({message:'Добавлено'})
    }
    catch(error){
       next(err)
    };
};

export const getOneClient = async(req,res,next) => {
    try{
        const {id} = req.params;
    
        const oneClient = await Client.findOne({where: {id}})

        res.status(200).json(oneClient)
    }
    catch(err){
        next(err)
    };
}
export const deleteClient = async(req,res,next) => {
    try{
        const {id} = req.params;
    
        const delClient = await Client.destroy({where: {id}})

        res.status(200).json({message: 'запись удалена'})
    }
    catch(err){
        next(err)
    };
}