"use client"
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import regData from '../datasets/regData';

const page = () => {
    const [formData, setFormData] = useState({
        selectedCourse: '',
        name: '',
        gender: '',
        age: '',
        email: '',
        whatsapp: '',
    });
    const [courses, setCourses] = useState([]);
    const [submitDisabled, setSubmitDisabled] = useState(true);

    useEffect(() => {
        setCourses(regData);
    }, []);

    useEffect(() => {
        const isFormValid =
            formData.name !== '' &&
            formData.gender !== '' &&
            formData.age !== '' &&
            formData.email !== '' &&
            formData.whatsapp !== '' &&
            formData.selectedCourse !== '';

        setSubmitDisabled(!isFormValid);
    }, [formData]);

    const handleInputChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    };
    return (
        <div id="reg" className="bg-lightkblue" style={{ background: "linear-gradient(to bottom, #DCDDEc, #C3E1FD)" }}>
            <div className="mx-auto max-w-7xl pt-20 sm:pb-24 px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 space-x-1">
                    <div className="col-span-6 flex flex-col justify-evenly">
                        <h1 className="text-midnightblue text-4xl sm:text-5xl font-semibold text-center lg:text-start lh-120 pt-5 lg:pt-0">
                            Register for Amazing Courses With LU Learning
                        </h1>
                        <h3 className="text-charcoal text-lg font-normal text-center lg:text-start opacity-75 pt-2 lg:pt-0">
                            Build skills with our courses and mentors from world-class companies.
                        </h3>
                        <div className="flex flex-col space-y-4">
                            <div className="flex space-x-4">
                                <div className="w-1/2">
                                    <label htmlFor="name" className="block mb-2 text-sm font-bold text-gray-700">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="Enter your name"
                                        value={formData.name}
                                        onChange={(e) => handleInputChange('name', e.target.value)}
                                        className="w-full px-3 py-3 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                        required
                                    />
                                </div>
                                <div className="w-1/2">
                                    <label htmlFor="email" className="block mb-2 text-sm font-bold text-gray-700">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="Enter your email"
                                        value={formData.email}
                                        onChange={(e) => handleInputChange('email', e.target.value)}
                                        className="w-full px-3 py-3 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="flex space-x-4">
                                <div className="w-1/2">
                                    <label htmlFor="age" className="block mb-2 text-sm font-bold text-gray-700">
                                        Age
                                    </label>
                                    <input
                                        type="number"
                                        id="age"
                                        placeholder="Enter your age"
                                        value={formData.age}
                                        onChange={(e) => handleInputChange('age', e.target.value)}
                                        className="w-full px-3 py-3 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                        required
                                    />
                                </div>
                                <div className="w-1/2">
                                    <label htmlFor="gender" className="block mb-2 text-sm font-bold text-gray-700">
                                        Gender
                                    </label>
                                    <select
                                        id="gender"
                                        value={formData.gender}
                                        onChange={(e) => handleInputChange('gender', e.target.value)}
                                        className="w-full px-3 py-3 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                        required
                                    >
                                        <option value="">Select Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex space-x-4">
                                <div className="w-1/2">
                                    <label htmlFor="whatsapp" className="block mb-2 text-sm font-bold text-gray-700">
                                        Contact Number (WhatsApp)
                                    </label>
                                    <input
                                        type="tel"
                                        id="whatsapp"
                                        placeholder="Enter your contact number"
                                        value={formData.whatsapp}
                                        onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                                        className="w-full px-3 py-3 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                        required
                                    />
                                </div>
                                <div className="w-1/2">
                                    <label htmlFor="selectedCourse" className="block mb-2 text-sm font-bold text-gray-700">
                                        Select Course
                                    </label>
                                    <select
                                        id="selectedCourse"
                                        value={formData.selectedCourse}
                                        onChange={(e) => handleInputChange('selectedCourse', e.target.value)}
                                        className="w-full px-3 py-3 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                        required
                                    >
                                        <option value="">Select a Course</option>
                                        {courses.map((course, index) => (
                                            <option key={index} value={course.heading}>
                                                {course.heading} -for Only Rs. {course.price}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    className={`mt-4 bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-700 ${submitDisabled ? 'opacity-50 px-6 py-3 bg-green-500 cursor-not-allowed' : ''}`}
                                    disabled={submitDisabled}
                                >
                                    Submit Registration
                                </button>
                            </div>
                        </div>


                        <div className="flex items-center justify-between pt-10 lg:pt-4">
                            <div className="flex gap-2">
                                <Image
                                    src="/assets/banner/check-circle.svg"
                                    alt="check-image"
                                    width={30}
                                    height={30}
                                    className="smallImage"
                                />
                                <p className="text-sm sm:text-lg font-normal text-black">
                                    Money Back Gurantee
                                </p>
                            </div>
                            <div className="flex gap-2">
                                <Image
                                    src="/assets/banner/check-circle.svg"
                                    alt="check-image"
                                    width={30}
                                    height={30}
                                    className="smallImage"
                                />
                                <p className="text-sm sm:text-lg font-normal text-black">
                                    Lifetime Support
                                </p>
                            </div>
                            <div className="flex gap-2">
                                <Image
                                    src="/assets/banner/check-circle.svg"
                                    alt="check-image"
                                    width={30}
                                    height={30}
                                    className="smallImage"
                                />
                                <p className="text-sm sm:text-lg font-normal text-black">
                                    WhatsApp Community
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-6 flex justify-center flex-col">
                        <Image
                            src="/assets/register/academy-illustration.png"
                            alt="nothing"
                            width={1000}
                            height={805}
                        />
                        <div className="text-center">
                            <h2 className="text-2xl font-semibold mb-2">About Us</h2>
                            <p className="text-gray-600 mb-4 pl-3">
                                LU is providing people with flexible and rigorous online learning opportunities that will help them acquire the knowledge, skills, and characteristics necessary for career readiness. LU is on a mission to help creators earn a living online. Here is what we do and how we get it done.
                            </p>
                            <div className="flex justify-center space-x-3">
                                <a href="#" className="text-gray-600 hover:text-blue-500">
                                    <FaFacebook size={50} />
                                </a>
                                <a href="#" className="text-gray-600 hover:text-blue-500">
                                    <FaTwitter size={50} />
                                </a>
                                <a href="#" className="text-gray-600 hover:text-blue-500">
                                    <FaInstagram size={50} />
                                </a>
                            </div>
                            <div className="mt-6">
                                <h3 className="text-lg font-semibold">Contact Us</h3>
                                <p className="text-gray-600">
                                    Email: info@example.com
                                </p>
                                <p className="text-gray-600">
                                    Phone: +1234567890
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default page;
