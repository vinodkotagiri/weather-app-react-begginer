import React from 'react'

const ForeCast = ({ title }) => {
    return (
        <div>
            <div className="flex items-center justify-start mt-6 ">
                <p className="uppercase text-white font-medium">{title} forecast</p>
            </div>
            <hr className="my-2" />
            <div className="flex flex-row items-center justify-between text-white">
                <div className="flex flex-col items-center justify-center">
                    <p className="font-light text-sm">04:22 PM</p>
                    <img src="" alt=". . ." className="w-12 my-1" />
                    <p className="font-medium">22<sup>o</sup></p>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <p className="font-light text-sm">04:22 PM</p>
                    <img src="" alt=". . ." className="w-12 my-1" />
                    <p className="font-medium">22<sup>o</sup></p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <p className="font-light text-sm">04:22 PM</p>
                    <img src="" alt=". . ." className="w-12 my-1" />
                    <p className="font-medium">22<sup>o</sup></p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <p className="font-light text-sm">04:22 PM</p>
                    <img src="" alt=". . ." className="w-12 my-1" />
                    <p className="font-medium">22<sup>o</sup></p>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <p className="font-light text-sm">04:22 PM</p>
                    <img src="" alt=". . ." className="w-12 my-1" />
                    <p className="font-medium">22<sup>o</sup></p>
                </div>
            </div>
        </div >
    )
}

export default ForeCast