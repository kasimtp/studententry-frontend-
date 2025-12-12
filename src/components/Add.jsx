import React from 'react';

const Add = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6 sm:p-10">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-6 md:p-10">
        
        <h2 className="text-3xl font-extrabold text-gray-800 mb-8 border-b-4 border-indigo-100 pb-3 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          New Student Enrollment
        </h2>

        <form className="space-y-8">
          
          {/* Section 1: Personal Details (Grid) */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-indigo-700 border-b pb-1">Personal Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
                  placeholder="Enter full name"
                />
              </div>

              {/* Phone Number Input */}
              <div>
                <label htmlFor="number" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="number"
                  id="number"
                  className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
                  placeholder="e.g., 9876543210"
                />
              </div>
              
              {/* Date of Birth Input */}
              <div>
                <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
                  Date of Birth
                </label>
                <input
                  type="date"
                  name="dob"
                  id="dob"
                  className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
                />
              </div>
              
              {/* Admission Date Input */}
              <div>
                <label htmlFor="admissionDate" className="block text-sm font-medium text-gray-700">
                  Admission Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  name="admissionDate"
                  id="admissionDate"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
                />
              </div>

            </div>
          </div>

          <hr className="border-gray-200" />
          
          {/* Section 2: Location Details (Grid) */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-indigo-700 border-b pb-1">Location Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
              {/* City/Town Input */}
              <div>
                <label htmlFor="place" className="block text-sm font-medium text-gray-700">
                  City/Town
                </label>
                <input
                  type="text"
                  name="place"
                  id="place"
                  className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
                  placeholder="e.g., New Delhi"
                />
              </div>

              {/* District Input */}
              <div>
                <label htmlFor="district" className="block text-sm font-medium text-gray-700">
                  District
                </label>
                <input
                  type="text"
                  name="district"
                  id="district"
                  className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
                  placeholder="e.g., Meerut"
                />
              </div>

              {/* Pincode Input */}
              <div>
                <label htmlFor="pincode" className="block text-sm font-medium text-gray-700">
                  Pincode
                </label>
                <input
                  type="text"
                  name="pincode"
                  id="pincode"
                  className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
                  placeholder="e.g., 250001"
                />
              </div>
            </div>

            {/* Full Width Address Input */}
            <div className="md:col-span-2">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                Full Address
              </label>
              <textarea
                name="address"
                id="address"
                rows="3"
                className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
                placeholder="House No., Street, Locality"
              ></textarea>
            </div>
          </div>

          <hr className="border-gray-200" />

          {/* Section 3: Photo (Full Width) */}
          <div className="space-y-4">
              <h3 className="text-xl font-semibold text-indigo-700 border-b pb-1">Photo Upload</h3>
            <div>
              <label htmlFor="photo" className="block text-sm font-medium text-gray-700">
                Student Photo
              </label>
              <input
                type="file"
                name="photo"
                id="photo"
                accept="image/*"
                className="mt-1 block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-indigo-50 file:text-indigo-700
                  hover:file:bg-indigo-100 transition duration-150"
              />
            </div>
          </div>


          {/* Submit Button */}
          <div className="pt-6">
            <button
              type="submit"
              className="w-full justify-center py-3 px-4 border border-transparent rounded-lg shadow-md text-lg font-bold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-indigo-500/50 transition duration-300 ease-in-out transform hover:scale-[1.01]"
            >
              Add/Submit Entry
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Add; // <<< This default export fixes the SyntaxError