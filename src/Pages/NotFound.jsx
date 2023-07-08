import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from '../components/Navbar'

const NotFound = () => {
  return (
    <div>
        <Helmet>
        <title>NV Photography | Page Not Found</title>
        <meta name="description" content="Are you sure this is a valid page ? Please return to Home page" />
        </Helmet>
        <Navbar />
        <div className='flex items-center flex-col font-quicksand font-semibold m-48'>
          <h1 className='text-5xl'>Page Not Found</h1>
          <p className='text-md mt-10'>This is not a valid page, please return back to the Home page</p>
      </div>
    </div>
  )
}

export default NotFound