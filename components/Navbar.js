import React from 'react'

const Navbar = () => {
  return (
    <div className="bg-black text-white sticky top-0 lg:h-screen flex flex-col">
      <div>
        <h1>Navbar</h1>
      </div>
      <div className="flex items-center justify-center flex-grow">
        <div className="hidden bg-red-500 w-52 h-52 lg:flex flex-wrap content-center justify-center">Hello World</div>
      </div>
    </div>
  )
}

export default Navbar
