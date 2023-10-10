import Location from '../models/locations.js';

const read = async (req, res) => {
    try {
        const results = await Location.findAll()
        res.status(200).json(results.rows)
    } catch(error) {
        res.status(400).json({ error: error.message })
    }
}

const readById = async (req, res) => {
    try {
        const results = await Location.findOne(req.params.id)
        res.status(200).json(results.rows)
    } catch(error) {
        res.status(400).json({ error: error.message })
    }
}

export default {
    read,
    readById
}