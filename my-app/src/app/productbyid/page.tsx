'use client'

import React, { Suspense } from 'react'
import Product from '@/Components/Main/Product'
import Nav from '@/Components/Navbar/Nav'

const Page = () => {
  return (
    <div>
      <Nav />
      <Suspense fallback={<div className="p-4 text-center">Loading product...</div>}>
        <Product />
      </Suspense>
    </div>
  )
}

export default Page
