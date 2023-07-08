import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { Link } from 'react-router-dom'


const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
  <div className=' flex justify-between items-center h-20 max-w-[1240px] mx-auto px-4 text-white '>
    <h1 className='w-full text-3xl font-medium font-josefin text-[#4aa9e1] cursor-pointer'><Link to='/'>NV PHOTOGRAPHY</Link></h1>
    <ul className='hidden md:flex font-semibold cursor-pointer text-black text-lg'>
      <li className='p-4 hover:text-[#4aa9e1] font-medium font-josefin'><Link to='/'>Home</Link></li>
      <li className='p-4 hover:text-[#4aa9e1] font-medium font-josefin'><Link to='/gallery'>Gallery</Link></li>
      <li className='p-4 hover:text-[#4aa9e1] font-medium font-josefin'><Link to='/contact'>Contact</Link></li>
    </ul>
      <div onClick={handleNav} className='block md:hidden cursor-pointer text-black mr-4'>
        {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
      </div>
      <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[white] ease-in-out duration-500 md:hidden' : 'fixed left-[-100%] z-50'}>
        <ul className=' p-4 cursor-pointer text-black font-semibold'>
          <li className='p-4 border-b hover:text-[#4aa9e1] border-gray-600 font-medium font-josefin'><Link to='home'>Home</Link></li>
          <li className='p-4 border-b hover:text-[#4aa9e1] border-gray-600 font-medium font-josefin'><Link to='gallery'>Gallery</Link></li>
          <li className='p-4 hover:text-[#4aa9e1] font-medium font-josefin'><Link to='contact'>Contact</Link> </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar