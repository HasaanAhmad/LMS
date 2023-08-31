"use client"
import React from 'react'
import { FaStar, FaMoneyBill } from 'react-icons/fa';
import Image from 'next/image';
import courseData from "@/app/datasets/courseData"

import { useParams } from 'next/navigation'

const page = () => {
    const Params = useParams();
    const { id } = Params;
    let course;


    courseData.map((item) => {
        if (item.li == id) {
            course = item;
        }
    }
    )
    if (!course) {
        return (
            <div className='mx-auto max-w-7xl sm:py-8 px-4 lg:px-8 '>
                <div>404</div>
            </div>
        )
    }
    return (
        <div className='mx-auto max-w-7xl sm:py-8 px-4 lg:px-8 '>
            <div>
                <div className="md:flex">
                    <div className="md:flex-shrink-0">
                        <Image className="h-full w-full object-cover " width={500} height={500} src={course.banner} alt="Course" />
                    </div>
                    <div className="p-8">
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{course.heading}</div>
                        <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{course.heading2}</a>
                        <p className="mt-2 text-gray-500">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut libero ac tortor tristique tristique.
                        </p>
                        <div className="mt-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                                <FaStar className="inline-block mr-1 text-yellow-500" />
                                4.8
                            </span>
                        </div>
                        <div className="mt-2">
                            <div className="flex items-center">
                                <FaMoneyBill className="inline-block mr-1 text-green-500" />
                                <span className="text-xl text-gray-900 font-semibold">Rs.{course.price}</span>
                            </div>
                        </div>
                        <div className="mt-4">
                            <button className="px-4 py-2 bg-indigo-500 text-white font-semibold rounded-lg hover:bg-indigo-600 focus:outline-none focus:shadow-outline">
                                Enroll Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )



}

export default page