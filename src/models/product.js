'use strict'

const mongoose = require('mongoose');
const categoria = require('./categoria');
const Schema = mongoose.Schema;

const schema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true
    },
    active :{
        type: Boolean, 
        required:true, 
        default:true
    },
});

module.exports = mongoose.model('Product',schema );