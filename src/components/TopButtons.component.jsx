import React from 'react'

const TopButtons = ({ setQuery }) => {
    const cities = [
        {
            id: 1,
            city: "London",
        },
        {
            id: 2,
            city: "New York",
        },
        {
            id: 3,
            city: "Dubai",
        },
        {
            id: 4,
            city: "New Delhi",
        },
        {
            id: 5,
            city: "Sydney",
        },
    ]
    return (
        <div className="flex items-center justify-around my-3">
            {
                cities.map((city) => (
                    <button className="text-white text-lg font-medium" key={city.id} onClick={() => setQuery({ q: city.city })}>{city.city}</button>
                ))
            }
        </div>
    )
}

export default TopButtons