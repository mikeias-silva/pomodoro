const mongoose = require('../database/database');

const temposSchema = new mongoose.Schema({

    id:{
        type: Number,
        require: true,
        unique: true,
        
    },
    minutos:{
        type: Number,
        require: true,
    },
    segundos:{
        type: Number,
        require: true,
        default: 00,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },



});

const Tempos = mongoose.model('Tempos', temposSchema);

module.exports = Tempos;