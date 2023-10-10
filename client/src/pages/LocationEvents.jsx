import React, { useState, useEffect } from 'react'
import Event from '../components/Event'
import EventsAPI from '../services/EventsAPI.js';
import '../css/LocationEvents.css'

const LocationEvents = ({index}) => {

    const [events, setEvents] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const data = await EventsAPI.getAllEvents()
                setEvents(data)
                console.log("events", data)
            }
            catch (error) {
                throw error
            }
        }) ()
    }, [])

    return (
        <div className='location-events'>
            <header>
                <div className='location-info'>
                    <h2>{index}</h2>
                </div>
            </header>

            <main>
                {
                    events && events.length > 0 ? events.filter(item => item.location === index).map((event, index) =>
                        <Event
                            event={event}
                        />
                    ) : <h2><i className="fa-regular fa-calendar-xmark fa-shake"></i> {'No events scheduled at this location yet!'}</h2>
                }
            </main>
        </div>
    )
}

export default LocationEvents