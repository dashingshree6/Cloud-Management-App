import React from "react";
import { CheckIcon } from "@heroicons/react/outline";

const AllInOne = () => {
    return (
        <div name='platforms' className='w-full my-7'>
            <div className='max-w-[1240px] mx-auto px-2'>
                <h2 className='text-5xl font-bold text-center'>All-In-One Platform</h2>
                <p className='text-2xl py-8 text-gray-500 text-center'>
                    It provides all types of services under one one platform.
                </p>
            </div>

            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4'>

                <div className='flex'>
                    <div><CheckIcon className='w-7 mr-4 text-green-600'/></div>
                    <div>
                        <h3 className='font-bold text-lg'>Notifications</h3>
                        <p className='text-lg pt-2 pb-4'>
                            All the notifications related to services will be provided at all times.
                        </p>
                    </div>
                </div>

                <div className='flex'>
                    <div><CheckIcon className='w-7 mr-4 text-green-600'/></div>
                    <div>
                        <h3 className='font-bold text-lg'>Renewal Packages</h3>
                        <p className='text-lg pt-2 pb-4'>
                            All the renweal packages related to services will be provided at all times.
                        </p>
                    </div>
                </div>

                <div className='flex'>
                    <div><CheckIcon className='w-7 mr-4 text-green-600'/></div>
                    <div>
                        <h3 className='font-bold text-lg'>Queries</h3>
                        <p className='text-lg pt-2 pb-4'>
                            All the queries related to services will be provided at all times.
                        </p>
                    </div>
                </div>

                <div className='flex'>
                    <div><CheckIcon className='w-7 mr-4 text-green-600'/></div>
                    <div>
                        <h3 className='font-bold text-lg'>Technical Support</h3>
                        <p className='text-lg pt-2 pb-4'>
                            All the technical support related to services will be provided at all times.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AllInOne;