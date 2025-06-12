import { Carousel } from '@/Components/Carousel/MainCarousel'
import MainFilter from '@/Components/Filter/MainFilter'
import Nav from '@/Components/Navbar/Nav'
import React from 'react'

const page = () => {
  return (
    <div >
      <Nav />
    <MainFilter />
   
    <MainCarousel />
      
    </div>
  )
}

export default page
