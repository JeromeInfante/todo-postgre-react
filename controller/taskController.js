import client from "../db.js";

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

export {addTask}