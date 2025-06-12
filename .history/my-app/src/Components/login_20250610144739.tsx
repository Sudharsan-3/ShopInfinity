"use client"
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Login = () => {
    const router = useRouter()
  return (
    <div>
        <h1>welcome to next.js</h1>
        <Link href={"/contact"}>Click Me</Link>
        <button onClick={()=> router("/cards")} > Click me 1</button>

    </div>
  )
}

export default Login
