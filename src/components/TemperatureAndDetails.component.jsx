import React from 'react'
import {
    UilArrowUp,
    UilArrowDown,
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset
} from '@iconscout/react-unicons'
const TemperatureAndDetails = () => {
    return (
        <div>
            <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
                <p>Clear and Whatever</p>
            </div>
            <div className="flex flex-row items-center justify-between py-3 text-white">
                <img src="" alt="..." className="w-20" />
                <p className="text-5xl">34<sup>o</sup></p>
                <div className="flex flex-col space-y-2">
                    <div className="flex flex-light items-center justify-center">
                        <UilTemperature size={18} className="mr-1" />Real feel: <sapn className="font-medium ml-1">32<sup>o</sup></sapn>
                    </div>
                    <div className="flex flex-light items-center justify-center">
                        <UilTear size={18} className="mr-1" />Humidity: <sapn className="font-medium ml-1">65%</sapn>
                    </div>
                    <div className="flex flex-light items-center justify-center">
                        <UilWind size={18} className="mr-1" />Wind: <sapn className="font-medium ml-1">11 km/h</sapn>
                    </div>
                </div>
            </div>
            <div className="flex flex-row space-x-2 text-white text-sm py-3 justify-center">
                <UilSun />
                <p className="font-light">Rise :<span className="font-medium ml-1">06:45 AM</span></p>
                <p className="font-light">|</p>

                <UilSunset />
                <p className="font-light">Set :<span className="font-medium ml-1">07:45 AM</span></p>
                <p className="font-light">|</p>

                <UilArrowUp />
                <p className="font-light">High :<span className="font-medium ml-1">32<sup>o</sup></span></p>
                <p className="font-light">|</p>

                <UilArrowDown />
                <p className="font-light">Low :<span className="font-medium ml-1">41<sup>o</sup></span></p>

            </div>
        </div>
    )
}

export default TemperatureAndDetails
