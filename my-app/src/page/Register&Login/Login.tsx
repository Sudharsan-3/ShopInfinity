'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

const Login = () => {
  const router = useRouter()
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-sm bg-white rounded-lg shadow-md p-6">
        <h3 className="text-2xl font-bold text-center mb-6">Login</h3>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Enter your email
            </label>
            <input
              type="email"
              id="email"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Enter your password
            </label>
            <input
              type="password"
              id="password"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
          >
            Login
          </button>
        </form>

        <div className="flex justify-between mt-4 text-sm">
          <button onClick={()=> router.push('/register')} className="text-indigo-600 hover:underline">Create one</button>
          <button className="text-indigo-600 hover:underline">Forgot password?</button>
        </div>
      </div>
    </div>
  )
}

export default Login
