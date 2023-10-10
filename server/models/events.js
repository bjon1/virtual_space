import pool from '../config/database.js';

const findAll = () => {
    const query = 'SELECT * FROM event ORDER BY date ASC'
    return pool.query(query)
}

const findOne = (id) => {
    const query = 'SELECT * FROM event WHERE id = $1'
    return pool.query(query, [id])
}

const findByLocation = (location) => {
    const query = 'SELECT * from event WHERE location = $1'
    return pool.query(query, [location])
}

export default {
    findAll,
    findOne,
    findByLocation
}