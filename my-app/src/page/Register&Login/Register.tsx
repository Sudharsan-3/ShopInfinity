'use client'
import React from 'react'
import { useRouter } from 'next/navigation'


const Register = () => {
    const router = useRouter()
    
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-sm shadow-2xl p-8 bg-white rounded-lg">
        <h3 className="text-2xl font-bold text-center mb-6">Register</h3>
        
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Enter your name
            </label>
            <input
              id="name"
              type="text"
              required
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Enter your email
            </label>
            <input
              id="email"
              type="email"
              required
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Enter your password
            </label>
            <input
              id="password"
              type="password"
              required
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <input
            type="submit"
            value="Register"
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
          />
        </form>

        <div className="flex justify-between mt-4 text-sm">
          <button onClick={()=> router.push("/login")} className="text-indigo-600 hover:underline">Already have an account?</button>
          <button onClick={()=> router.push("/login")} className="text-indigo-600 hover:underline">Login</button>
        </div>
      </div>
    </div>
  )
}

export default Register
