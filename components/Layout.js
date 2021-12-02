import React from 'react'
import { Header } from '.'
import { Footer } from '.'
import { Sidebar } from '.'

const Layout = ({ children }) => {
  return (
    <div className="flex lg:flex-row sm:flex-col flex-col-reverse min-h-screen">
      <div className="sticky sm:top-0 bottom-0 lg:w-1/3">
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
