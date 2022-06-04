import React from "react";
import { CheckIcon } from "@heroicons/react/solid";

const Pricing = () => {
    return (
        <div name='pricing' className='w-full text-white my-24'>
            <div className='w-full h-[800px] bg-slate-900 absolute mix-blend-overlay'></div>
            
            <div className='max-w-[1240px] mx-auto py-12'>

                <div className='text-center py-8 text-slate-300'>
                    <h2 className='text-3xl uppercase'>Pricing</h2>
                    <h3 className='text-5xl font-bold text-white py-8'>The right price for your research.</h3>
                    <p className='text-3xl'>All prcies range is affordable for all types of customers.</p>
                </div>

                <div className='grid md:grid-cols-2'>

                    <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
                        <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Standard</span>
                        <div>
                            <p className='text-6xl font-bold py-4'>$49<span className='text-xl text-slate-500 flex flex-col justify-end'>/mon</span></p>
                        </div>
                        <p className='py-1 text-slate-500'>It gives you all the standard features.</p>
                        <div className='text-xl'>
                            <p className='flex py-1'><CheckIcon className='w-8 mr-5 text-green-600'/>Computing</p>
                            <p className='flex py-1'><CheckIcon className='w-8 mr-5 text-green-600'/>Storage</p>
                            <p className='flex py-1'><CheckIcon className='w-8 mr-5 text-green-600'/>Databases</p>
                            <p className='flex py-1'><CheckIcon className='w-8 mr-5 text-green-600'/>Data Analytics</p>
                            <p className='flex py-1'><CheckIcon className='w-8 mr-5 text-green-600'/>AI and Machine Learning</p>
                            <button className='w-full py-1 my-1 bg-red-200'>Get Started</button>
                        </div>
                    </div>

                    <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
                        <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Premium</span>
                        <div>
                            <p className='text-6xl font-bold py-4'>$99<span className='text-xl text-slate-500 flex flex-col justify-end'>/mon</span></p>
                        </div>
                        <p className='py-1 text-slate-500'>It gives you all the standard features.</p>
                        <div className='text-xl'>
                            <p className='flex py-1'><CheckIcon className='w-8 mr-5 text-green-600'/>Computing</p>
                            <p className='flex py-1'><CheckIcon className='w-8 mr-5 text-green-600'/>Storage</p>
                            <p className='flex py-1'><CheckIcon className='w-8 mr-5 text-green-600'/>Databases</p>
                            <p className='flex py-1'><CheckIcon className='w-8 mr-5 text-green-600'/>Data Analytics</p>
                            <p className='flex py-1'><CheckIcon className='w-8 mr-5 text-green-600'/>AI and Machine Learning</p>
                            <button className='w-full py-1 my-1 bg-red-200'>Get Started</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Pricing;