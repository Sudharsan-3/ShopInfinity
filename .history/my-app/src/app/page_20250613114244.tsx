import MainCarousel from '@/Components/Carousel/MainCarousel'
import { MainCards } from '@/Components/Credslayout/MainCards'
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

   <MainCards />
      
    </div>
  )
}

export default page
