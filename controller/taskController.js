import client from "../db.js";
import {query} from "express";

const addTask = async (req, res) => {
    const {title} = req.body
    console.log(title)
    try {
        const query = await client.query('INSERT INTO task (title) VALUES ($1) RETURNING *', [title]);
        res.status(200).json(query.rows[0]);

    } catch (err) {
        res.status(400).json({err: err.message})
    }
}

const deleteTask = async (req, res) =>{
    const {id} = req.params

    try {
        await client.query('DELETE FROM task WHERE id = $1', [id])
        res.status(200).json({msg: 'successfully deleted'});
    }catch (err){
        res.status(400).json({err: err.message})
    }

}

const getTasks = async (req, res) => {
    try {
        const query = await client.query('SELECT * FROM task')
        res.status(200).json(query.rows)
    }catch (e) {
        res.status(400).json({err: e.message})
    }
}

const getTask = async (req, res) =>{
    const {id} = req.params
    try {
        const query = await client.query("SELECT * FROM task WHERE id=$1", [id])
        res.status(200).json(query.rows[0])
    }catch (e) {
        res.status(400).json({err: e.message})
    }
}

const updateTask = async (req, res) =>{
    const {title} = req.body
    const {id} = req.params

    try {
        const query = await client.query("UPDATE task SET title=$1 WHERE id=$2", [title, id])
        res.status(200).json(query.rows[0])
    }catch (e) {
        res.status(400).json({err: e.message})
    }

}

export {addTask, deleteTask, getTasks, getTask, updateTask}