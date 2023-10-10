import React, { useState, useEffect } from 'react'
import LocationsAPI from '../services/LocationsAPI'
import '../css/Locations.css'
import { Link } from 'react-router-dom';

const Locations = () => {

    const [locations, setLocations] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const locationsData = await LocationsAPI.getAllLocations()
                setLocations(locationsData)
                console.log("LOCATIONS", locationsData)
            }
            catch (error) {
                throw error
            }
        }) ()
    }, [])


    return (
        <div className="locations">
            {locations.map((location) => (
                <Link to={`/${location.name}`} role='button'>
                    <div className="location">
                        <div className="card">
                            <div className="name">
                                {location.name}
                            </div>
                            <div className="description">
                                {location.description}
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default Locations;