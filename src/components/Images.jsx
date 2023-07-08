import React from 'react';

import img_1 from '../assets/images/1.jpg';
import img_2 from '../assets/images/2.jpg';
import img_3 from '../assets/images/3.jpg';
import img_4 from '../assets/images/4.jpg';
import img_5 from '../assets/images/5.jpg';
import img_6 from '../assets/images/6.jpg';
import img_7 from '../assets/images/7.jpg';
import img_8 from '../assets/images/8.jpg';
import img_9 from '../assets/images/9.jpg';
import img_10 from '../assets/images/10.jpg';
import img_11 from '../assets/images/11.jpeg';
import img_12 from '../assets/images/12.jpg';
import img_13 from '../assets/images/13.jpg';
import img_14 from '../assets/images/14.jpg';
import img_15 from '../assets/images/15.jpg';
import img_16 from '../assets/images/16.jpg';
import img_17 from '../assets/images/17.jpg';
import img_18 from '../assets/images/18.jpg';
import img_19 from '../assets/images/19.jpg';
import img_20 from '../assets/images/20.jpg';
import img_21 from '../assets/images/21.jpg';
import img_22 from '../assets/images/22.jpg';
import img_23 from '../assets/images/23.jpg';
import img_24 from '../assets/images/24.jpg';
import img_25 from '../assets/images/25.jpg';
import img_26 from '../assets/images/26.jpg';
import img_27 from '../assets/images/27.jpg';

const ImageList = () => {
  const images = [
    { image: img_25 },
    { image: img_1 },
    { image: img_2 },
    { image: img_24 },
    { image: img_3 },
    { image: img_26 },
    { image: img_4 },
    { image: img_5 },
    { image: img_19 },
    { image: img_20 },
    { image: img_9 },
    { image: img_10 },
    { image: img_27 },
    { image: img_11 },
    { image: img_12 },
    { image: img_13 },
    { image: img_6 },
    { image: img_7 },
    { image: img_8 },
    { image: img_17 },
    { image: img_18 },
    { image: img_22 },
    { image: img_21 },
    { image: img_14 },
    { image: img_15 },
    { image: img_16 },   
    { image: img_25 },
    { image: img_1 },
    { image: img_2 },
    { image: img_7 },
    { image: img_8 },
    { image: img_24 },
    { image: img_3 },
    { image: img_26 },
    { image: img_4 },
    { image: img_5 },
    { image: img_19 },
    { image: img_20 },
    { image: img_9 },
    { image: img_10 },
    { image: img_27 },
    { image: img_16 },
    { image: img_11 },
    { image: img_12 },
    { image: img_13 },
    { image: img_6 },
    { image: img_23 },   
    { image: img_18 },
    { image: img_22 },
    { image: img_21 },
    { image: img_14 },
    { image: img_15 },
  
    { image: img_23 },
    // Add more image paths as needed
  ];

  return (
    <div className='max-w-[90vw] mx-auto columns-1  xs:columns-2 md:columns-3 lg:columns-4 xl:columns-5 space-y-4 mt-4  '>
      {images.map((image, index) => (
        <img src={image.image} className='hover:scale-105 transform-gpu'/>
      ))}
    </div>
  );
};

export default ImageList;
