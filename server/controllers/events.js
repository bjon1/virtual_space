import Event from '../models/events.js';

const read = async (req, res) => {
    try {
        const results = await Event.findAll()
        res.status(200).json(results.rows)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const readById = async (req, res) => {
    try {
        const results = await Event.findOne(req.params.id)
        res.status(200).json(results.rows[0])
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}



export default {
    read,
    readById, 
}