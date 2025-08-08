// src/app/page.tsx
'use client';

import { signIn } from 'next-auth/react';
import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="flex h-screen w-full">
      {/* Left Side - Quote + Visual */}
      <div className="hidden md:flex flex-col justify-center items-center w-1/2 bg-gradient-to-br from-purple-700 via-blue-500 to-pink-500 text-white p-10">
        <h1 className="text-4xl font-bold mb-4 text-center">Get Everything You Want</h1>
        <p className="text-lg text-center max-w-md">
          You can get everything you want if you work hard, trust the process, and stick to the plan.
        </p>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-8">
        <div className="w-full max-w-md space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-semibold">Welcome Back</h2>
            <p className="text-gray-600 mt-2">Enter your email and password to access your account</p>
          </div>

          {/* Email/Password UI (non-functional for now) */}
          <div className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex justify-between text-sm text-gray-600">
              <label>
                <input type="checkbox" className="mr-1" /> Remember me
              </label>
              <a href="#" className="hover:underline">
                Forgot password?
              </a>
            </div>
            <button
              className="w-full bg-black text-white py-3 rounded-md font-semibold hover:opacity-90"
            >
              Sign In
            </button>
          </div>

          {/* Divider */}
          <div className="text-center text-gray-400">OR</div>

          {/* Google Sign-In Button */}
          <button
            onClick={() => signIn('google')}
            className="w-full flex items-center justify-center border border-gray-300 py-3 rounded-md hover:bg-gray-100"
          >
            <Image
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google logo"
              width={20}
              height={20}
              className="mr-2"
            />
            Sign in with Google
          </button>
        </div>
      </div>
    </main>
  );
}
