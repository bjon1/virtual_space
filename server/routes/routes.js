import express from 'express';
import LocationsController from '../controllers/locations.js';
import EventsController from '../controllers/events.js';

const router = express.Router()

router.get('/locations', LocationsController.read)
router.get('/locations/:id', LocationsController.readById) 

router.use('/events', EventsController.read)
router.use('/events/:id', EventsController.readById)

export default router;