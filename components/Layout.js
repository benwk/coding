import React from 'react'
import { Header } from '.'
import { Footer } from '.'
import { Sidebar } from '.'

const Layout = ({ children }) => {
  return (
    <div className="grid lg:grid-cols-3">
      <div className="bg-black">
        <Sidebar />
      </div>
      <div className="lg:col-span-2">
        {/* <Header /> */}
        { children }
        {/* <Footer /> */}
      </div>
      
    </div>
  )
}

export default Layout
