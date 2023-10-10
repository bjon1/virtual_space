import React, { useState, useEffect } from 'react'
import '../css/Event.css'
import EventsAPI from '../services/EventsAPI'
import LocationsAPI from '../services/LocationsAPI'

const Event = ({event}) => {


    return (
        <article className='event-information'>
            <h2>Hover to see the event</h2>
            <div className='event-information-overlay'>
                { event && 
                (<div className='text'>
                    <h3>{event.name}</h3>
                    <p><i className="fa-regular fa-calendar fa-bounce"></i> {event.date} <br /></p>
                    <p id={`remaining-${event.id}`}>{event.time}</p>
                    <p>{event.description}</p>
                    <p>{event.location}</p>
                </div>)
                }
            </div>
        </article>
    )
}

export default Event