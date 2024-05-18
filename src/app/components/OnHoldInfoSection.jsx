import React from 'react'
import { Quicksand } from 'next/font/google';

const quicksand = Quicksand({ 
    subsets: ['latin'],
    weight:['400']
})

const OnHoldInfoSection = () => {
  return (
    <section className='inset-0 top-0 left-0 right-0 bottom-0 z-30 flex w-screen h-screen items-center justify-center relative'>
        <div className={`h-1/2 w-1/2 z-40 backdrop-blur flex flex-col rounded-md border-2 shadow-sm border-slate-400/30 bg-white dark:bg-[#1e293b] text-center align-middle items-center justify-center p-4 overflow-auto leading-6 lg:leading-normal text-xl md:text-2xl xl:text-5xl ${quicksand.className}`}>
            <h1 className='mb-2 pb-2'>Coming Soon...</h1>
            <h2 className='text-lg md:text-xl xl:text-4xl'>This project is <strong>on-hold</strong></h2>
            <p className='text-sm md:text-lg xl:text-2xl'>as SoundCloud has <strong>stopped</strong> new app registrations, we&rsquo;re looking into <strong>alternate options</strong> like Spotify, etc...</p>
        </div>
        <div className='absolute backdrop-blur bg-white dark:bg-black opacity-30 w-full h-full blur-xl'></div>
    </section>
  )
}

export default OnHoldInfoSection