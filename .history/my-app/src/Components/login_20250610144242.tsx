"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

const Login = () => {
    const router = useRouter()
  return (
    <div>
        <h1>welcome to next.js</h1>
        <button className='white' onClick={()=> router("/contact")} >Click me</button>

    </div>
  )
}

export default Login
