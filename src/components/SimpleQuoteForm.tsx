'use client';

import { useState } from 'react';

export default function SimpleQuoteForm() {
  const [files, setFiles] = useState<File[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    setFiles(prev => [...prev, ...selectedFiles]);
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h3 className="text-2xl font-semibold text-gray-900 mb-6">Simple Quote Request</h3>
      
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="simple-name" className="block text-sm font-medium text-gray-700 mb-2">
              Your Name *
            </label>
            <input
              type="text"
              id="simple-name"
              name="name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              placeholder="John Smith"
            />
          </div>
          
          <div>
            <label htmlFor="simple-email" className="block text-sm font-medium text-gray-700 mb-2">
              Email *
            </label>
            <input
              type="email"
              id="simple-email"
              name="email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="simple-quantity" className="block text-sm font-medium text-gray-700 mb-2">
            How many do you need? *
          </label>
          <input
            type="number"
            id="simple-quantity"
            name="quantity"
            min="50"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            placeholder="e.g. 500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Upload Your Logo/Design *
          </label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-teal-500 transition-colors">
            <input
              type="file"
              id="simple-files"
              name="files"
              multiple
              accept="image/*,.pdf,.ai,.eps,.svg"
              onChange={handleFileChange}
              className="hidden"
            />
            <label htmlFor="simple-files" className="cursor-pointer">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
              <p className="text-lg text-gray-600 mb-2">
                <span className="font-medium text-teal-500">Click to upload your logo</span>
              </p>
              <p className="text-sm text-gray-500">
                PNG, JPG, PDF, AI, EPS, SVG files
              </p>
            </label>
          </div>
          
          {files.length > 0 && (
            <div className="mt-4 space-y-2">
              <p className="text-sm font-medium text-gray-700">Uploaded files:</p>
              {files.map((file, index) => (
                <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                  <span className="text-sm text-gray-600">{file.name}</span>
                  <button
                    type="button"
                    onClick={() => removeFile(index)}
                    className="text-red-500 hover:text-red-700 text-sm"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div>
          <label htmlFor="simple-description" className="block text-sm font-medium text-gray-700 mb-2">
            Describe your project *
          </label>
          <textarea
            id="simple-description"
            name="description"
            rows={4}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
            placeholder="Tell us what you need: lanyard type, colors, when you need it delivered, etc."
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-teal-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-teal-600 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
        >
          GET MY QUOTE
        </button>
      </form>
    </div>
  );
}