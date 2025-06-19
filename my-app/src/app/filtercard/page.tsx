'use client'

import React, { Suspense } from 'react'
import FilterCards from '@/Components/Main/FilterCards'
import Nav from '@/Components/Navbar/Nav'
import Filter from '@/Components/Productfilter/Filter'

const Page = () => {
  return (
    <div>
      <Nav />

      <Suspense fallback={<div className="text-center p-4">Loading Products...</div>}>
     
        
        <FilterCards />
       
      
        
      </Suspense>
      
    </div>
  )
}

export default Page
