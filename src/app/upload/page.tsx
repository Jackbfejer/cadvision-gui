import React from 'react'
import { FaCloudUploadAlt, FaFile, FaTrash } from 'react-icons/fa'

export default function UploadPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h2 className="text-lg font-medium text-gray-900">Upload Drawing Set</h2>
          <p className="mt-1 text-sm text-gray-500">
            Upload your MEP drawing set for processing. Supported formats: .dwg, .rvt, .pdf
          </p>

          {/* Upload Area */}
          <div className="mt-6">
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
              <div className="space-y-1 text-center">
                <FaCloudUploadAlt className="mx-auto h-12 w-12 text-gray-400" />
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                  >
                    <span>Upload files</span>
                    <input id="file-upload" name="file-upload" type="file" className="sr-only" multiple />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">Up to 10 files, 100MB each</p>
              </div>
            </div>
          </div>

          {/* File List */}
          <div className="mt-6">
            <h3 className="text-sm font-medium text-gray-900">Selected Files</h3>
            <ul role="list" className="mt-2 divide-y divide-gray-200">
              {/* Example files - replace with actual uploaded files */}
              <li className="py-3 flex items-center justify-between">
                <div className="flex items-center">
                  <FaFile className="h-5 w-5 text-gray-400" />
                  <span className="ml-2 text-sm text-gray-900">mechanical.dwg</span>
                </div>
                <button
                  type="button"
                  className="ml-2 text-sm font-medium text-red-600 hover:text-red-500"
                >
                  <FaTrash className="h-4 w-4" />
                </button>
              </li>
              <li className="py-3 flex items-center justify-between">
                <div className="flex items-center">
                  <FaFile className="h-5 w-5 text-gray-400" />
                  <span className="ml-2 text-sm text-gray-900">electrical.dwg</span>
                </div>
                <button
                  type="button"
                  className="ml-2 text-sm font-medium text-red-600 hover:text-red-500"
                >
                  <FaTrash className="h-4 w-4" />
                </button>
              </li>
            </ul>
          </div>

          {/* Processing Options */}
          <div className="mt-6">
            <h3 className="text-sm font-medium text-gray-900">Processing Options</h3>
            <div className="mt-2 space-y-4">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="optimize"
                    name="optimize"
                    type="checkbox"
                    className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                    defaultChecked
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="optimize" className="font-medium text-gray-700">
                    Optimize MEP routing
                  </label>
                  <p className="text-gray-500">Automatically optimize pipe and duct routing for efficiency</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="clash"
                    name="clash"
                    type="checkbox"
                    className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                    defaultChecked
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="clash" className="font-medium text-gray-700">
                    Clash detection
                  </label>
                  <p className="text-gray-500">Detect and resolve conflicts between different MEP systems</p>
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="button"
              className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Process Drawing Set
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 