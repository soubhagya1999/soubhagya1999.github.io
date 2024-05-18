import React from 'react'

const searchBar = () => {
  return (
    <section className='fixed top-1 m-2 w-full lg:w-[calc(100%-18rem)] items-center justify-center lg:left-[18rem] flex blur-[1.5px]'>
        <div className='relative flex flex-row gap-0 w-1/2 md:w-2/4 2xl:w-2/4 bg-slate-800/30 h-10 p-2 rounded-md ring-1 ring-slate-400/30 dark:ring-slate-400/30 text-slate-400 text-sm lg:text-base overflow-hidden text-ellipsis whitespace-nowrap text-center items-center'>
        <svg width="24" height="24" fill="none" aria-hidden="true" className="mr-1 lg:mr-3 flex-none"><path d="m19 19-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></circle></svg>
        Search for a song or genre or artist...
        </div>
    </section>
  )
}

export default searchBar