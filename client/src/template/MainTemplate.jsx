import React from 'react'
import { Outlet } from 'react-router-dom'
import SearchBar from "../components/SearchBar";
import Navbar from "../components/Navbar";
function MainTemplate() {
  return (
    <div className="h-screen flex flex-col">
      <SearchBar />
      <div className="flex w-full justify-between mt-2 h-full">
        {/* first */}
        <div className="w-1/6 h-full">
          <Navbar />
        </div>
        <div className='w-5/6'>
            <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default MainTemplate