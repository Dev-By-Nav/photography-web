import React from 'react'
import ImageList from '../components/Images'
import Navbar from '../components/Navbar'
import { Helmet } from 'react-helmet'


const Gallery = () => {
  return (
    <div>
        <Helmet>
        <title>NV Photography | Gallery</title>
        <meta name="description" content="See our work and past events" />
        </Helmet>
        <Navbar />
        <ImageList />
    </div>
  )
}

export default Gallery