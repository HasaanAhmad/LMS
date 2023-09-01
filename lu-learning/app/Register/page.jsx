'use client'
import React, { useState, useEffect } from 'react';
import regData from '../datasets/regData';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
const Page = () => {
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [courses, setCourses] = useState([]);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [gender, setGender] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const router = useRouter()

  useEffect(() => {
    setCourses(regData);
  }, []);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleCourseSelection = (course) => {
    event.preventDefault();
    if (selectedCourses.includes(course.heading)) {
      setSelectedCourses(selectedCourses.filter(selected => selected !== course.heading));
    } else {
      setSelectedCourses([...selectedCourses, course.heading]);
    }
  };
 
  const handleSubmit = (event) => {
    event.preventDefault(); 
    const selectedCoursePrices = courses
  .filter(course => selectedCourses.includes(course.heading))
  .map(course => course.price);

  const totalSum = selectedCoursePrices.reduce((sum, price) => sum + price, 0);
  console.log(totalSum)
  sessionStorage.setItem("totalCost", totalSum);
  router.push('/successPage')

  };

  return (
    <div className="bg-gradient-to-r from-blue-400 to-purple-600 min-h-screen flex justify-center items-center">
      <div className="px-10 py-10 w-full sm:w-3/4 md:w-1/2 lg:w-2/3 xl:w-1/2 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold mb-6 text-center text-white bg-blue-300 py-5">Registration</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700">
              Gender
            </label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700">
              Age
            </label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700">
              Whatsapp number
            </label>
            <input
              type="tel"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

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
                          <span>{course.heading} - {course.price} Rs.</span>
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
              type="button"
              className="mt-4 bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-600"
              onClick={handleSubmit}
            >
              Submit
              
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
