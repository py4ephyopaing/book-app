import React from 'react'
import ThemeSwitch from '../components/ThemeSwitch'
import { FaBell, FaDoorOpen, FaGlobe, FaLock, FaMoneyBill, FaMoon } from 'react-icons/fa'

function Setting() {
    

    return (
        <div className="min-h-screen w-full bg-gray-100 dark:bg-slate-600 h-auto px-3 lg:px-10 py-2 lg:py-4">
            
            <p className="text-3xl lg:text-5xl py-2 md:py-6 lg:py-10 font-nunito font-medium dark:text-white text-gray-900">Settings</p>

            <div className="lg:px-10 md:px-4 mb-3">
                <div className="px-5 py-5 font-medium rounded-md text-lg text-emerald-950 dark:text-emerald-50 bg-slate-200 dark:bg-slate-800/25 flex justify-between">
                    <span className='flex items-center gap-x-2'><FaMoon /> Dark Mode</span>
                    <ThemeSwitch />
                </div>
            </div>

            <div className="lg:px-10 md:px-4 mb-3">
                <div className="px-5 py-5 font-medium rounded-md text-lg text-emerald-950 dark:text-emerald-50 bg-slate-200 dark:bg-slate-800/25 flex justify-between">
                    <span className='flex items-center gap-x-2'><FaBell /> Notification</span>
                </div>
            </div>

            <div className="lg:px-10 md:px-4 mb-3">
                <div className="px-5 py-5 font-medium rounded-md text-lg text-emerald-950 dark:text-emerald-50 bg-slate-200 dark:bg-slate-800/25 flex justify-between">
                    <span className='flex items-center gap-x-2'><FaLock /> Privacy</span>
                </div>
            </div>

            <div className="lg:px-10 md:px-4 mb-3">
                <div className="px-5 py-5 font-medium rounded-md text-lg text-emerald-950 dark:text-emerald-50 bg-slate-200 dark:bg-slate-800/25 flex justify-between">
                    <span className='flex items-center gap-x-2'><FaMoneyBill /> Payments</span>
                </div>
            </div>

            <div className="lg:px-10 md:px-4 mb-3">
                <div className="px-5 py-5 font-medium rounded-md text-lg text-emerald-950 dark:text-emerald-50 bg-slate-200 dark:bg-slate-800/25 flex justify-between">
                <span className='flex items-center gap-x-2'><FaGlobe /> Language & Region</span>
                </div>
            </div>

            <div className="lg:px-10 md:px-4 mb-3">
                <div className="px-5 py-5 rounded-md text-lg text-emerald-950 dark:text-emerald-50 bg-slate-200 dark:bg-slate-800/25 flex justify-between">
                    <span className='flex items-center gap-x-2'><FaDoorOpen /> Logout</span>
                </div>
            </div>
        </div>
    )
}

export default Setting