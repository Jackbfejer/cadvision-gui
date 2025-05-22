import React from 'react'
import Link from 'next/link'
import { FaUpload, FaDownload, FaHistory, FaBuilding } from 'react-icons/fa'

const quickActions = [
  {
    name: 'Upload New Drawings',
    description: 'Upload a new set of MEP drawings for processing',
    icon: FaUpload,
    href: '/upload',
    color: 'bg-blue-500',
  },
  {
    name: 'Export Results',
    description: 'Download processed and optimized drawing sets',
    icon: FaDownload,
    href: '/export',
    color: 'bg-green-500',
  },
  {
    name: 'Recent Projects',
    description: 'View and manage your recent projects',
    icon: FaBuilding,
    href: '/projects',
    color: 'bg-purple-500',
  },
  {
    name: 'Processing History',
    description: 'Check the status of your drawing sets',
    icon: FaHistory,
    href: '/history',
    color: 'bg-yellow-500',
  },
]

const recentProjects = [
  {
    id: 1,
    name: 'Hospital MEP System',
    status: 'Processing',
    lastUpdated: '2 hours ago',
    progress: 75,
  },
  {
    id: 2,
    name: 'Office Tower HVAC',
    status: 'Completed',
    lastUpdated: '1 day ago',
    progress: 100,
  },
  {
    id: 3,
    name: 'Shopping Mall Plumbing',
    status: 'Queued',
    lastUpdated: '3 hours ago',
    progress: 0,
  },
]

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-white shadow rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-900">Welcome back, John</h1>
        <p className="mt-1 text-gray-500">
          Upload your MEP drawings and let CADVision optimize your systems.
        </p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {quickActions.map((action) => (
          <Link
            key={action.name}
            href={action.href}
            className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow duration-300"
          >
            <div className="p-5">
              <div className="flex items-center">
                <div className={`flex-shrink-0 rounded-md p-3 ${action.color}`}>
                  <action.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      {action.name}
                    </dt>
                    <dd className="text-sm text-gray-900">{action.description}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Recent Projects */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h2 className="text-lg font-medium text-gray-900">Recent Projects</h2>
          <p className="mt-1 text-sm text-gray-500">
            Track the status of your recent drawing set processing.
          </p>
        </div>
        <div className="border-t border-gray-200">
          <ul role="list" className="divide-y divide-gray-200">
            {recentProjects.map((project) => (
              <li key={project.id} className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <p className="text-sm font-medium text-blue-600 truncate">
                      {project.name}
                    </p>
                    <div className="ml-2 flex-shrink-0 flex">
                      <p
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          project.status === 'Completed'
                            ? 'bg-green-100 text-green-800'
                            : project.status === 'Processing'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {project.status}
                      </p>
                    </div>
                  </div>
                  <div className="ml-2 flex-shrink-0 flex">
                    <p className="text-sm text-gray-500">{project.lastUpdated}</p>
                  </div>
                </div>
                {project.status === 'Processing' && (
                  <div className="mt-2">
                    <div className="relative pt-1">
                      <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-200">
                        <div
                          style={{ width: `${project.progress}%` }}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                        ></div>
                      </div>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
} 