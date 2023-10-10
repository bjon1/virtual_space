import pool from '../config/database.js';

const findAll = () => {
    const query = 'SELECT * FROM event ORDER BY name ASC'
    return pool.query(query)
}

const findOne = (id) => {
    const query = 'SELECT * FROM event WHERE id = $1'
    return pool.query(query, [id])
}

export default {
    findAll,
    findOne
}