import React from 'react'

export default function Advanced() {
  return (
    <div style={{position:'relative'}}>
        <div style={{position:'relative',top:'-20px'}} className='flex flex-col justify-center'>
        <div className='flex justify-start items-center'>
            <input 
                type="text" 
                placeholder="Eventline name" 
                className="input input-sm w-[180px]"
            />
            <div className="bg-white p-2">
                <button className="btn btn-neutral btn-xs">Create</button>
            </div>
        </div>
        <div className='w-full flex flex-col justify-between items-center border-t border-gray-300 pt-4'>
            <div className='w-full flex flex-col justify-between items-center'>
                <input 
                type="text" 
                placeholder="Search Events" 
                className="input input-sm w-[100%] mb-1"
                />
                <div className='h-[180px] w-[100%] border rounded border-gray-300'></div>
            </div>
            <div className='h-[100px] w-[100%] border rounded border-gray-300 mt-1 flex flex-col justify-start items-start'>
            </div>
        </div>
        <button className="btn btn-neutral btn-xs w-[60px] mt-2" style={{position:'absolute',bottom:'5px'}}>Add</button>
        </div>
    </div>
  )
}
