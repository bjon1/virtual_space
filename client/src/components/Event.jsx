import React, { useState, useEffect } from 'react'
import '../css/Event.css'
import EventsAPI from '../services/EventsAPI'

const Event = (props) => {

    const [event, setEvent] = useState({})

    useEffect(() => {
        (async () => {
            try {
                const eventData = await EventsAPI.getEventsById(props.id)
                setEvent(eventData)
                print("EVENT", event)
            }
            catch (error) {
                throw error
            }
        }) ()
    }, [])

    return (
        <article className='event-information'>
            <img src={event.image} />

            <div className='event-information-overlay'>
                <div className='text'>
                    <h3>{event.title}</h3>
                    <p><i className="fa-regular fa-calendar fa-bounce"></i> {event.date} <br /></p>
                    <p id={`remaining-${event.id}`}></p>
                </div>
            </div>
        </article>
    )
}

export default Event