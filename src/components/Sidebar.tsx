import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  FaHome, 
  FaUpload, 
  FaDownload, 
  FaHistory, 
  FaUser, 
  FaCog,
  FaBuilding
} from 'react-icons/fa'

const navigation = [
  { name: 'Dashboard', href: '/', icon: FaHome },
  { name: 'Projects', href: '/projects', icon: FaBuilding },
  { name: 'Upload Drawings', href: '/upload', icon: FaUpload },
  { name: 'Export', href: '/export', icon: FaDownload },
  { name: 'History', href: '/history', icon: FaHistory },
  { name: 'Profile', href: '/profile', icon: FaUser },
  { name: 'Settings', href: '/settings', icon: FaCog },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col w-64">
        <div className="flex flex-col h-0 flex-1 bg-white border-r border-gray-200">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
              <span className="text-2xl font-bold text-blue-600">CADVision</span>
            </div>
            <nav className="mt-5 flex-1 px-2 space-y-1">
              {navigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                      isActive
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <item.icon
                      className={`mr-3 flex-shrink-0 h-6 w-6 ${
                        isActive ? 'text-blue-600' : 'text-gray-400 group-hover:text-gray-500'
                      }`}
                      aria-hidden="true"
                    />
                    {item.name}
                  </Link>
                )
              })}
            </nav>
          </div>
          <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
            <div className="flex-shrink-0 w-full group block">
              <div className="flex items-center">
                <div>
                  <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-blue-100">
                    <span className="text-lg font-medium leading-none text-blue-600">JD</span>
                  </div>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                    John Doe
                  </p>
                  <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">
                    View profile
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 