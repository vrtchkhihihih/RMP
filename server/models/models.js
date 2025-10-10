import sequelize from '../db.js';
import {DataTypes} from 'sequelize';
const Client = sequelize.define('clients', {
    id: {
        type: DataTypes.INTEGER, 
        allowNull: false, 
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    raiting:{
        type: DataTypes.DECIMAL,
        allowNull: false,
        defaultValue: 0
    },
    age: {
        type: DataTypes.DATE
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'user'
    },
});

const Product = sequelize.define('products', {
    id: {
        type: DataTypes.INTEGER, 
        allowNull: false, 
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    count: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
});

const Order = sequelize.define('orders', {
    id: {
        type: DataTypes.INTEGER, 
        allowNull: false, 
        primaryKey: true,
        autoIncrement: true
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'открыт'
    },
    totalPrice: {
        type: DataTypes.DECIMAL,
        defaultValue: 0
    },
});

const OrderItem = sequelize.define('orderItems', {
    id: {
        type: DataTypes.INTEGER, 
        allowNull: false, 
        primaryKey: true,
        autoIncrement: true
    },
    count: {
        type: DataTypes.INTEGER,
    },
    price: {
        type: DataTypes.DECIMAL,
    },
});