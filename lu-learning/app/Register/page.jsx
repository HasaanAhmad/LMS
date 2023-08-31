'use client'
import React, { useState, useEffect } from 'react';
import regData from '../datasets/regData';

const Page = () => {
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [courses, setCourses] = useState([]);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  useEffect(() => {
    setCourses(regData);
  }, []);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleCourseSelection = (course) => {
    if (selectedCourses.includes(course.heading)) {
      setSelectedCourses(selectedCourses.filter(selected => selected !== course.heading));
    } else {
      setSelectedCourses([...selectedCourses, course.heading]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form submission and page refresh
    // Add your logic to handle form submission here
    // You can use selectedCourses and other form data
  };

  return (
    <div className="bg-gradient-to-r from-blue-400 to-purple-600 min-h-screen flex justify-center items-center">
      <div className="px-10 py-10 w-full sm:w-3/4 md:w-1/2 lg:w-2/3 xl:w-1/2 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold mb-6 text-center text-white bg-blue-300 py-5">Registration</h1>
        <form onSubmit={handleSubmit}>
          {/* Other form fields */}
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700">
              Name
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700">
              Father's Name
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          {/* ... Other form fields ... */}

          {/* Course Selection */}
          <div className="bg-white rounded-lg p-6 mb-4">
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 flex justify-between items-center"
              >
                <span>
                  {selectedCourses.length > 0
                    ? `${selectedCourses.length} Course${selectedCourses.length > 1 ? 's' : ''} Selected`
                    : 'Select Courses'}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 transition-transform transform ${
                    dropdownVisible ? 'rotate-180' : ''
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 0 1 1.414 0L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z"
                  />
                </svg>
              </button>
              {dropdownVisible && (
                <div className="absolute z-10 mt-2 bg-white border rounded-md shadow-md">
                  <ul className="py-1">
                    {courses.map((course, index) => (
                      <li
                        key={index}
                        className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                      >
                        <label className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            checked={selectedCourses.includes(course.heading)}
                            onChange={() => handleCourseSelection(course)}
                            className="w-4 h-4 text-blue-600"
                          />
                          <span>{course.heading} - {course.price}</span>
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="mt-4 bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-600"
            >
              Submit Registration
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
