require('dotenv').config();
const express = require('express');
const cors = require('cors');
const taskRoute = require('./Routes/tasks.route');
const sprintRoute = require('./Routes/sprint.route');
const { dbConnect } = require('./Configs/db');

const PORT = process.env.PORT;

const app = express();
app.use(cors());
app.use('/tasks', taskRoute);
app.use('/sprint', sprintRoute);

app.get('/', (req,res) => {
    res.send('Welcome to Task Planner for Backend');
});

app.listen(PORT, async () => {
    try{
        await dbConnect;
        console.log('Connected to the DataBase');
    } catch (err) {
        console.log('Error connecting to the DataBase');
        console.log(err);
    }
    console.log(`Server is running on port ${PORT}`);
})