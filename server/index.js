// reguire('dotenv').config() - метод commonJS

//commonJS
// const express = require('express');
// const {Router} = require('express');
// module.exports = myFune;
// module.exports = {class1, class2};
// exports.myFune = () => {}

//ESM
// import express from 'express'
// import {Router} from 'express'
// import * as models from './node_modules'

//export default myClass 
//export {class1, class2} 
//export const myFunc = () => {}

import 'dotenv/config' //ES modules
import sequelize from './db.js'
import models from './models/models.js'
import express from 'express';
import cors from 'cors';
import router from './routers/router.js'

const app = express();
const PORT = process.env.PORT
app.use('/api', router)

const start = async () => {
try {
    app.listen(PORT, () => {
        console.log (`сервер работает на порту ${PORT}`);
    })
    await sequelize.authenticate()
    console.log('успешное подключение к БД');
    
await sequelize.sync();

}   catch(error) {
        console.log('Не удалось подключиться к БД', error)
    }
}
start();

