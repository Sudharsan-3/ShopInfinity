"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const Login = () => {
    const router = useRouter()
  return (
    <div>
        <h1>welcome to next.js</h1>
        <Link href={"/conatact"}></Link>

    </div>
  )
}

export default Login
