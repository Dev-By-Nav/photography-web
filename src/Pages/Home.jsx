import React from 'react'
import { Helmet } from 'react-helmet';

import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import ImageList from '../components/Images';



function Home() {
  return (
    <div className=''>
        <Helmet>
        <title>NV Photography | Home</title>
        <meta name="description" content="Welcome to our home page, find out more about us and see our past work" />
        </Helmet>
      <Navbar />
      <Banner />
      <Services />
      <Testimonials />

    </div>
  )
}

export default Home


// import React from "react";
// import Card from '../components/Card'
// import img_1 from '../assets/images/1.jpg'
// import img_2 from '../assets/images/2.jpg'
// import img_3 from '../assets/images/3.jpg'
// import img_4 from '../assets/images/4.jpg'
// import img_5 from '../assets/images/5.jpg'
// import img_6 from '../assets/images/6.jpg'
// import img_7 from '../assets/images/7.jpg'
// import img_8 from '../assets/images/8.jpg'
// import img_9 from '../assets/images/9.jpg'
// import img_10 from '../assets/images/10.jpg'
// import img_11 from '../assets/images/11.jpeg'
// import img_12 from '../assets/images/12.jpg'
// import img_13 from '../assets/images/13.jpg'
// import img_14 from '../assets/images/14.jpg'
// import img_15 from '../assets/images/15.jpg'
// import img_16 from '../assets/images/16.jpg'
// import img_17 from '../assets/images/17.jpg'
// import img_18 from '../assets/images/18.jpg'
// import img_19 from '../assets/images/19.jpg'
// import img_20 from '../assets/images/20.jpg'
// import img_21 from '../assets/images/21.jpg'
// import img_22 from '../assets/images/22.jpg'
// import img_23 from '../assets/images/23.jpg'
// import img_24 from '../assets/images/24.jpg'
// import img_25 from '../assets/images/25.jpg'
// import img_26 from '../assets/images/26.jpg'
// import img_27 from '../assets/images/27.jpg'



// const Pins = () => {
//     const cards = [
//       { image: img_1, username: "Ai Jean" },
  
//       { image: img_2, username: "Ai Jean" },
//       { image: img_3, username: "Ai Jean" },
//       { image: img_4, username: "Ai Jean" },
//       { image: img_5, username: "My new car" },
  
//       { image: img_6, username: "My new car" },
  
//       { image: img_7, username: "My new car" },
//       { image: img_8, username: "Ai Jean" },
//       { image: img_9, username: "Ai Jean" },
//       { image: img_10, username: "Ai Jean" },
//       { image: img_11, username: "Ai Jean" },
//       { image: img_12, username: "Ai Jean" },
  
//       { image: img_13, username: "My new car" },
  
//       { image: img_14, username: "My new car" },
//       { image: img_15, username: "Ai Jean" },
//       { image: img_16, username: "Ai Jean" },
//       { image: img_17, username: "Ai Jean" },
//       { image: img_18, username: "Ai Jean" },
//       { image: img_19, username: "Ai Jean" },
//       { image: img_20, username: "Ai Jean" },
//       { image: img_21, username: "My new car" },
//     ];
    