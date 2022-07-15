import React, { useState } from 'react'
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons'
import { toast } from 'react-toastify'
const Inputs = ({ units, setUnits, setQuery }) => {
    const [city, setCity] = useState('')
    const handleSearchClick = () => {
        if (city !== '') setQuery({ q: city })
    }
    const handleLocationClick = () => {
        if (navigator.geolocation) {
            toast.info('Fetching user location')
            navigator.geolocation.getCurrentPosition((position) => {
                toast.success('Location Fetched')
                let lat = position.coords.latitude
                let lon = position.coords.longitude
                setQuery({ lat, lon })
            })
        }
    }
    const handleUnitsChange = (e) => {
        const selectedUnit = e.currentTarget.name
        if (units !== selectedUnit)
            setUnits(selectedUnit)
    }
    return (
        <div className="flex flex-row justify-center">
            <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
                <input value={city} onChange={(e) => setCity(e.currentTarget.value)} type="text" placeholder="search for location. . ." className="capitalize placeholder:lowercase text-xl font-light p-2 focus:outline-none w-full shadow-xl rounded-lg" />
                <UilSearch size={25} className="text-white cursor-pointer hover:scale-125 transition ease-in-out" onClick={handleSearchClick} />
                <UilLocationPoint size={25} className="text-white cursor-pointer hover:scale-125 transition ease-in-out" onClick={handleLocationClick} />
            </div>
            <div className="flex flex-row w-1/4 items-center justify-center">
                <button name="metric" className="text-xl text-white font-light hover:scale-125 transition ease-in-out" onClick={handleUnitsChange}><sup>o</sup>C</button>
                <p className="text-xl text-white mx-4 align-center justify-center">|</p>
                <button name="imperial" className="text-xl text-white font-light hover:scale-125 transition ease-in-out" onClick={handleUnitsChange}><sup>o</sup>F</button>
            </div>

        </div >
    )
}

export default Inputs
