import React from 'react'
import { iconUrlFromCode } from '../services/WeatherServices'

const ForeCast = ({ items }) => {
    return (
        <div>
            <div className="flex items-center justify-start mt-6 ">
                <p className="uppercase text-white font-medium">{items.title} forecast</p>
            </div>
            <hr className="my-2" />
            <div className="flex flex-row items-center justify-between text-white">
                {
                    items.map((item) => (

                        <div className="flex flex-col items-center justify-center">
                            <p className="font-light text-sm">{item.title}</p>
                            <img src={iconUrlFromCode(item.icon)} alt=". . ." className="w-12 my-1" />
                            <p className="font-medium">{item.temp.toFixed()}<sup>o</sup></p>
                        </div>
                    ))
                }
            </div>
        </div >
    )
}

export default ForeCast