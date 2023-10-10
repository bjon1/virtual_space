import pool from '../config/database.js'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const data = fs.readFileSync(path.resolve(__dirname, 'data.json'), 'utf8')
const data2 = fs.readFileSync(path.resolve(__dirname, 'data2.json'), 'utf8')

const createLocationsTable = async () => {
    try {
        const createTableQuery = `
            DROP TABLE IF EXISTS location;
            CREATE TABLE IF NOT EXISTS location (
                id SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                description TEXT NOT NULL
            )
        `
        await pool.query(createTableQuery)
    } catch (error) {
        console.log(error)
    }
}

const insertLocations = async () => {
    try {
      const insertQuery = `
          INSERT INTO location (name, description)
          VALUES ($1, $2)
        `
  
      const locations = JSON.parse(data2)
  
      for (let location of locations) {
        const values = [
          location.name,
          location.description
        ]
  
        await pool.query(insertQuery, values)
        console.log(`✅ added ${location.name}`)
      }
    } catch (error) {
      console.log(error)
    }
  }

const createEventsTable = async () => {
  try {
    const createTableQuery = `
        DROP TABLE IF EXISTS event;
        CREATE TABLE IF NOT EXISTS event (
          id SERIAL PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          date TEXT NOT NULL,
          time TEXT NOT NULL,
          description TEXT NOT NULL,
          location TEXT NOT NULL,
          organizer TEXT NOT NULL
        )
      `
    await pool.query(createTableQuery)
  } catch (error) {
    console.log(error)
  }
}

const insertEvents = async () => {
  try {
    const insertQuery = `
        INSERT INTO event (name, date, time, description, location, organizer)
        VALUES ($1, $2, $3, $4, $5, $6)
      `

    const events = JSON.parse(data)

    for (let event of events) {
      const values = [
        event.name,
        event.date,
        event.time,
        event.description,
        event.location,
        event.organizer
      ]

      await pool.query(insertQuery, values)
      console.log(`✅ added ${event.name}`)
    }
  } catch (error) {
    console.log(error)
  }
}

const setup = async () => {
  await createEventsTable()
  await insertEvents()
  await createLocationsTable()
  await insertLocations()
}

export default setup