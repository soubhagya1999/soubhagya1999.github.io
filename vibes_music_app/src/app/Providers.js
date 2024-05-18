"use client"
import { ThemeProvider } from 'next-themes'
import React from 'react'

/**
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child elements.
 */
const Providers = ({children}) => {
  return (
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
        {children}
    </ThemeProvider>
  )
}

export default Providers