import React from 'react'
import { Quicksand } from 'next/font/google';

const quicksand = Quicksand({ 
    subsets: ['latin'],
    weight:['400']
})

const OnHoldInfoSection = () => {
  return (
    <section className='fixed inset-0 top-0 left-0 right-0 bottom-0 z-30 flex max-h-full items-center justify-center'>
        <div className={`h-1/2 w-1/2 flex flex-col rounded-md border-2 border-slate-400/30 bg-white dark:bg-[#1e293b] text-center align-middle items-center justify-center p-4 overflow-auto leading-6 lg:leading-normal text-lg md:text-2xl xl:text-5xl ${quicksand.className}`}>
            <h2>This project is <strong>on-hold</strong></h2>
            <p className='text-base md:text-xl xl:text-3xl'>as SoundCloud has <strong>stopped</strong> new app registrations, we&rsquo;re looking into <strong>alternate options</strong> like Spotify, etc...</p>
        </div>
    </section>
  )
}

export default OnHoldInfoSection