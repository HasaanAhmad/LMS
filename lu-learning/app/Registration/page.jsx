'use client'
import React, { useState } from 'react';
import regData from '../datasets/regData';

const Page = () => {
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [studentData, setStudentData] = useState({
    studentName: '',
    fathersName: '',
    emailAddress: '',
  });

  const handleCourseSelection = (e) => {
    const selectedCourse = e.target.value;
    setSelectedCourses((prevSelectedCourses) => {
      if (prevSelectedCourses.includes(selectedCourse)) {
        return prevSelectedCourses.filter(course => course !== selectedCourse);
      } else {
        return [...prevSelectedCourses, selectedCourse];
      }
    });
  };

  const handleStudentDataChange = (e) => {
    const { name, value } = e.target;
    setStudentData((prevStudentData) => ({
      ...prevStudentData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create an object with the collected data
    const registrationData = {
      ...studentData,
      selectedCourses,
    };

    // Send the registrationData to the company's website using an API or other method
    console.log('Registration Data:', registrationData);

    // Reset the form fields
    setStudentData({
      studentName: '',
      fathersName: '',
      emailAddress: '',
    });
    setSelectedCourses([]);
  };

  return (
    <div className="bg-gradient-to-r from-blue-400 to-purple-600 min-h-screen flex justify-center items-center">
      <div className="w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 py-8 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold mb-6 text-center text-white bg-blue-300 py-5">Registration</h1>
        <form onSubmit={handleSubmit}>

        <div className="bg-white rounded-lg p-6 mb-4">
          <h2 className="text-xl font-semibold mb-2 text-center">Student Information</h2>
          <div className="mb-4">
            <label htmlFor="studentName" className="block font-medium text-gray-700 mb-1">
              Student Name:
            </label>
            <input
              type="text"
              id="studentName"
              name="studentName"
              value={studentData.studentName}
              onChange={handleStudentDataChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="fathersName" className="block font-medium text-gray-700 mb-1">
              Father's Name:
            </label>
            <input
              type="text"
              id="fathersName"
              name="fathersName"
              value={studentData.fathersName}
              onChange={handleStudentDataChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="emailAddress" className="block font-medium text-gray-700 mb-1">
              Email Address:
            </label>
            <input
              type="email"
              id="emailAddress"
              name="emailAddress"
              value={studentData.emailAddress}
              onChange={handleStudentDataChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
        </div>
        <div className="bg-white rounded-lg p-6 mb-4">
          <h2 className="text-xl font-semibold mb-2">Select Courses</h2>
          <div className="mb-4">
            {regData.map((course, index) => (
              <label key={index} className="flex items-center">
                <input
                  type="checkbox"
                  name={`courseSelect-${index}`}
                  value={course.heading}
                  checked={selectedCourses.includes(course.heading)}
                  onChange={handleCourseSelection}
                  className="mr-2"
                />
                {course.heading}
              </label>
            ))}
          </div>
        </div>
        <div className="flex justify-center">
            <button
              type="submit"
              className="mt-4 bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-600">
              Submit Registration
            </button>
          </div>
      </form>
    </div>
    </div>
  );
};

export default Page;
