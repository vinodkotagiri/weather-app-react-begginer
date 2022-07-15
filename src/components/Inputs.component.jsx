import React from 'react'
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons'
const Inputs = () => {
    return (
        <div className="flex flex-row justify-center my-6">
            <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
                <input type="text" placeholder="search for location. . ." className="capitalize placeholder:lowercase text-xl font-light p-2 focus:outline-none w-full shadow-xl rounded-lg" />
                <UilSearch size={25} className="text-white cursor-pointer hover:scale-125 transition ease-in-out" />
                <UilLocationPoint size={25} className="text-white cursor-pointer hover:scale-125 transition ease-in-out" />
            </div>
            <div className="flex flex-row w-1/4 items-center justify-center">
                <button name="metric" className="text-xl text-white font-light"><sup>o</sup>C</button>
                <p className="text-xl text-white mx-4 align-center justify-center">|</p>
                <button name="imperial" className="text-xl text-white font-light"><sup>o</sup>F</button>
            </div>

        </div >
    )
}

export default Inputs
