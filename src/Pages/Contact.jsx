import React from 'react'
import Navbar from '../components/Navbar'
import Form from '../components/Form'
import { Helmet } from 'react-helmet'

const Contact = () => {
  return (
    <div>
        <Helmet>
        <title>NV Photography | Contact Us</title>
        <meta name="description" content="Send us a message to get a quote or for more info and someone will get back to you." />
        </Helmet>
      <Navbar />
      <Form />
    </div>
  )
}

export default Contact