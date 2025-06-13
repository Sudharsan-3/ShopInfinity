import MainCarousel from '@/Components/Carousel/MainCarousel'
import { MainCards } from '@/Components/Credslayout/MainCards'
import { MainCards1 } from '@/Components/Credslayout/MainCards1'
import { MainCards2 } from '@/Components/Credslayout/MainCards2'
import MainFilter from '@/Components/Filter/MainFilter'
import Cards from '@/Components/Main/Cards'
import { Footer } from '@/Components/Navbar/Footer'
import Nav from '@/Components/Navbar/Nav'
import React from 'react'

const page = () => {
  return (
    <div >
      <Nav />
    <MainFilter />
   
    <MainCarousel />

   <MainCards />
   <MainCards1 />
   <MainCards2 />
   <Footer 

      
    </div>
  )
}

export default page
