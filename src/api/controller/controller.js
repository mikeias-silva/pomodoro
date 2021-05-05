const express = require ('express');

const Tempos = require ('../model/tempos.js');

const router = express.Router();

router.post('/inserir', async(req, res) =>{
   
    try {
        const tempo = await Tempos.create(req.body);

        return res.send( { tempo } );
    } catch (error) {
        return res.status(400).send({error: 'Falha'});

        
    }
});


module.exports = app => app.use('/pomodoro', router)