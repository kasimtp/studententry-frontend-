import React from 'react';
import { useNavigate } from 'react-router-dom';

const List = () => {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-gray-50 p-6 sm:p-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Header and Action Buttons */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-800 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
            Student List
          </h2>
          
          <div className="flex space-x-4">
            {/* Add New Button (to navigate to the Add component) */}
            <button
              className="px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150"
              onClick={()=> navigate('/add')}
            >
              + Add New Student
            </button>
            
            {/* Download PDF Button */}
            <button
              className="px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150"
              // onClick={() => console.log('Download PDF')}
            >
              ⬇️ Download PDF
            </button>
          </div>
        </div>

        {/* --- Student List Table --- */}
        <div className="bg-white shadow-xl rounded-xl overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Admission Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  District
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {/* Example Row 1 */}
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Alex Johnson
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  2023-08-15
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  New Delhi
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  {/* Remove Button */}
                  <button 
                    className="text-red-600 hover:text-red-900 ml-4"
                    // onClick={() => console.log('Remove Student')}
                  >
                    Remove
                  </button>
                </td>
              </tr>

              {/* Example Row 2 */}
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Priya Sharma
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  2024-01-10
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Mumbai
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  {/* Remove Button */}
                  <button 
                    className="text-red-600 hover:text-red-900 ml-4"
                    // onClick={() => console.log('Remove Student')}
                  >
                    Remove
                  </button>
                </td>
              </tr>

              {/* Add more rows here dynamically using .map() in a real application */}

            </tbody>
          </table>
        </div>
        
        {/* Note: This component only provides the *design* for the list. 
             Actual data fetching, pagination, and button functionality 
             (like Remove and Download PDF) would require additional React logic. 
        */}

      </div>
    </div>
  );
};

export default List;