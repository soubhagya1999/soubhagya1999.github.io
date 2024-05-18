import React from 'react'
import { useTheme } from 'next-themes'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
const SideBar = () => {
  return (
    <section className='fixed z-20 inset-0 top-0 left-0 h-full bottom-0 right-auto w-[19rem] pr-6 blur-[1.5px]'>
        <nav id='sideNavBar' className='hidden lg:block my-auto relative h-full lg:text-sm lg:leading-6 bg-slate-300 dark:bg-slate-900 opacity-50 overflow-y-auto border border-r-[#A4A5A7] dark:border-r-[#33353F] border-t-transparent border-b-transparent border-l-transparent'>
        </nav>
        <div className='block lg:hidden m-3 p-3 text-slate-200 opacity-80'>
            <MenuRoundedIcon className='h-5 w-5'/>
        </div>
    </section>
  )
}

export default SideBar