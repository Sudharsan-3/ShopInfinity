import React from 'react'
import { useRouter } from 'next/navigation'

const Login = () => {
    const ro = useRouter()
  return (
    <div>
        <h1>welcome to next.js</h1>
        <button onClick={()=> navigate()} >Click me</button>
      
    </div>
  )
}

export default Login
