import React from 'react'
import { Header } from '.'
import { Footer } from '.'
import { Sidebar } from '.'

const Layout = ({ children }) => {
  return (
    <div className="flex lg:flex-row sm:flex-col">
      <div className="hidden sticky top-0 sm:block lg:w-1/3">
        {/* TODO: why sticky needs to be defined twice? */}
        <Sidebar />
      </div>
      <div className="flex flex-grow items-center justify-center">
        {/* <Header /> */}
        { children }
        {/* <Footer /> */}
      </div>
      
    </div>
  )
}

export default Layout
