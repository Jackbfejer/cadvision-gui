'use client'

import React from 'react'
import Image from 'next/image'
import { FaBell, FaQuestionCircle } from 'react-icons/fa'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              {/* Mobile menu button would go here */}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <Image
                src="/logo.png"
                alt="CADVision Logo"
                width={120}
                height={40}
                className="h-8 w-auto"
                priority
              />
            </div>
            <button
              type="button"
              className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <span className="sr-only">View notifications</span>
              <FaQuestionCircle className="h-6 w-6" />
            </button>

            <button
              type="button"
              className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <span className="sr-only">View notifications</span>
              <FaBell className="h-6 w-6" />
            </button>

            {/* Profile dropdown would go here */}
          </div>
        </div>
      </div>
    </header>
  )
} 