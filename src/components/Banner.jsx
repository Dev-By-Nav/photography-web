import React from 'react';
import Typed from 'react-typed';
import img_15 from '../assets/images/15.jpg'
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga'


const Banner = () => {
  const handleButtonClick = () => {
    ReactGA.event({
      category: 'Button',
      action: 'click',
      label: 'see_work'
    });
  };
  return (
    <div className=' '>
      <div
        className="bg-[url] bg-cover bg-center flex items-center justify-center h-80 md:h-128 rounded-xl m-3"
        style={{ backgroundImage: `url(${img_15})` }}
      >

        <div className='flex flex-col items-center py-8'>
          <div className='flex justify-center items-center text-white '>
            <h1 className="md:text-5xl sm:text-4xl text-2xl font-bold py-3">Book us for your</h1>
            <Typed className='md:text-5xl sm:text-4xl text-2xl font-bold md:pl-4 pl-2' strings={['Wedding','Engagment','Photoshoot','Parties','Pre-Shoot','Pre-Wedding','& More']} typeSpeed={120} backSpeed={140} loop />

          </div>
        <div className=" flex space-x-4 mt-10 md:mt-16 ">
          <button className="bg-[#a1d1ed] hover:bg-[#4aa9e1] text-white py-2 px-4 md:py-4 md:px-8 md:text-lg font-medium rounded">
            <Link to='/gallery' id="myButton" onClick={handleButtonClick}>See Our Work</Link>
          </button>
          <button className="bg-[#a1d1ed] hover:bg-[#4aa9e1] text-white py-2 px-5 md:py-4 md:px-9 md:text-lg font-medium rounded">
            <Link to='/contact'>Get In Touch </Link>
          </button>
        </div>
        </div>
      </div>
      
    </div>
  )
}

export default Banner


{/* <header className="flex flex-col items-center py-8">
      <h1 className="text-3xl font-bold">My App</h1>
      <div className="mt-4 flex space-x-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
          Button 1
        </button>
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
          Button 2
        </button>
      </div>
    </header> */}

    // <div className='flex justify-center items-center text-white '>
    //       <p className='md:text-5xl sm:text-4xl text-xl font-bold py-3'>
    //           Fast, flexible financing for your
    //       </p>
    //         <Typed className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2' strings={['Wedding','Engagment','Photoshoot','Parties','Pre-Shoot','Pre-Wedding','& More']} typeSpeed={120} backSpeed={140} loop />
    //     </div>