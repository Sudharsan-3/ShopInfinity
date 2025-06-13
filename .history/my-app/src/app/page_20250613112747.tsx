import MainCarousel from '@/Components/Carousel/MainCarousel'
import MainFilter from '@/Components/Filter/MainFilter'
import Cards from '@/Components/Main/Cards'
import Nav from '@/Components/Navbar/Nav'
import React from 'react'

const page = () => {
  return (
    <div >
      <Nav />
    <MainFilter />
   
    <MainCarousel />

    <Cards />
    <Cards />
    <Cards />
      
    </div>
  )
}

export default page
