import React from 'react'
import img_26 from '../assets/images/26.jpg'
import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <div className='bg-[#fbcaf5]'>
    <div className="container flex flex-col w-full ">
      <h1 className='flex justify-center items-center m-4 my-8 font-josefin text-3xl font-medium text-[#4aa9e1]'>About Us</h1>

  <div className="content flex items-center justify-center mx-2 md:mx-8 mb-8">
    <div className="image md:mr-10 ">
      <img src={img_26} alt="Image" className='md:h-96 h-72 w-96' />
    </div>

    <div className='flex flex-col ml-2 md:ml-10'>
    <div className="text font-medium font-quicksand text-xs md:text-lg">
      <p><span className='text-1xl md:text-3xl'>W</span>elcome to our photography page, dedicated to showcasing the beauty and joy of Asian weddings.<br/> As a team of experienced photographers, we specialize in documenting the vibrant and culturally rich<br/> ceremonies that make Asian weddings truly unique. Specialising in asian wedding, we photograph all <br/>types of events whether that be before, on or after your big day. From engagments all the way through <br/>to the reception and everything in between, we won't be beaten on quality <br/>So get in touch with one of our team today to find out how we can make your big day extra special ! </p>
    </div>
    <div>
      <button className='md:mt-10 mt-5 bg-[#a1d1ed] hover:bg-[#4aa9e1] text-white py-2 px-4 md:py-3 md:px-6 md:text-lg font-medium rounded'>
        <Link to='/contact'>Contact Us</Link>
      </button>
    </div>
    </div>
  </div>



</div>
</div>
  )
}

export default Services


{/* <div className="container flex flex-col my-8 ">
<h1 className='flex justify-center items-center m-4 mb-8 font-josefin text-2xl font-medium text-[#4aa9e1]'>SERVICES</h1>

<div className="content flex items-center justify-center mx-2 md:mx-8">
  <div className="image ">
    <img src={img_26} alt="Image" className='md:h-80 h-40 w-80' />
  </div>
  <div className="text ml-2 md:ml-6 font-josefin text-sm">
    <p>Welcome to our photography page, dedicated to capturing the beauty and joy of Asian weddings.<br/> As a team of experienced photographers, we specialize in documenting the vibrant and culturally rich<br/> ceremonies that make Asian weddings truly unique. </p>
  </div>
</div>


<div className="content flex items-center justify-center my-8 mx-2 md:mx-8">
  <div className="text font-josefin text-sm mr-6">
    <p className='text-right'>Specialising in asian wedding, we photograph all types of events whether that be before, on or after your big day.<br/> From engagments all the way through to the reception and everything in between, we won't be beaten on quality <br/>So get in touch with one of our team today to find out how we can make your big day extra special !</p>
  </div>
  <div className="image ml-2">
    <img src={img_27} alt="Image" className='md:h-80 h-40 w-80' />
  </div>
</div>
</div> */}