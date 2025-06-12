import React from 'react'
import { useRouter } from 'next/navigation'

const Login = () => {
    const router = useRouter()
  return (
    <div>
        <h1>welcome to next.js</h1>
        <button onClick={()=> router("/coant")} >Click me</button>
      
    </div>
  )
}

export default Login
