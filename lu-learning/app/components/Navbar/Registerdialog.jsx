import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { LockClosedIcon } from '@heroicons/react/20/solid'
import { useRouter } from 'next/navigation'


const Register = () => {
    const router = useRouter()
    const handleRegister = () => {
        router.push('/register2')
    }

    return (
        <>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto  sm:pr-0">
                <div className='hidden lg:block'>
                    <button className="text-Blueviolet border-2 text-lg font-medium ml-9 py-5 px-16 transition duration-150 ease-in-out rounded-full bg-semiblueviolet hover:text-white hover:bg-[#666AA9]" onClick={handleRegister}>
                        Register Now
                    </button>
                </div>
            </div>
        </>
    )
}

export default Register;
