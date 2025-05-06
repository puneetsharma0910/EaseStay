import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'
import { UserButton } from '@clerk/clerk-react'
const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3  bg-white transition-all duration-300 '>
        <Link to={"/"} className='flex items-center gap-2'>
         <p className="flex items-center gap-2 transition-all">
          <img src="/review.png" alt="EaseStay Logo" className="h-10" />
          EaseStay
        </p>
        
        
        
        </Link>
        <UserButton></UserButton>
      
    </div>
  )
}

export default Navbar
