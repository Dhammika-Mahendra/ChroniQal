import React from 'react'
import { useAppContext } from '../../context/AppContext';

export default function Slider() {

    const { scale, setScale } = useAppContext()

    return (
        <div className="w-32 flex flex-col items-center w-full mt-4">
            <div className='flex justify-between w-full px-2 mb-1'>
                <svg class="w-3 h-3 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7 7V5"/>
                </svg>
                <svg class="w-3 h-3 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14"/>
                </svg>
            </div>
            <input
                type="range"
                min={1}
                max={15}
                value={scale}
                step={1}
                onChange={(e) => setScale(Number(e.target.value))}
                style={{ width: '140px', height: '4px', cursor: 'pointer' }}
            /> 
        </div>
    )
}
