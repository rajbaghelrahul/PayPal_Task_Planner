const express = require('express');
const { ModelTask } = require('../Models/task.model');

const app = express.Router();
app.use(express.json());

app.get('/', async (req, res) => {
    try{
        let allTasks = await ModelTask.find();
        if (allTasks.length>0) {
            res.status(200).send({message:'Here is the list of all the Tasks', allTasks});
        } else {
            res.send({message:'Sorry!!! We do not have any tasks, Please add one'});
        }
    } catch (err) {
        res.status(400).send({message:'Something went wrong', err});
    }
});

app.post('/', async (req,res) => {
    const payload = req.body;
    try {
        const newTask = new ModelTask(payload);
        await newTask.save();
        res.status(201).send({message:'Task Created Successfully', newTask});
    } catch (err) {
        res.status(400).send({message:'Something went wrong', err});
    }
});

app.patch('/:id', async (req,res) => {
    const {id} = req.params;
    const payload = req.body;

    try{
        const updateTask = await ModelTask.findByIdAndUpdate({_id:id}, payload);
        res.status(204).send({message:`Task with ID:- ${id} has been updated`});
    } catch (err) {
        res.status(400).send({message:'Something went wrong', err});
    }
});

app.delete('/:id', async (req,res) => {
    const {id} = req.params;

    try{
        const deleteTask = await ModelTask.findByIdAndDelete({_id:id});
        res.status(202).send({message:`Task with ID:- ${id} has been deleted`});
    } catch (err) {
        res.status(400).send({message:'Something went wrong', err});
    }
});

module.exports = app;