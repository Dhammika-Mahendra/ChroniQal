import React, { useState } from 'react'
import { useAppContext } from '../../../context/AppContext'
import AddItem from './AddItem';
import Advanced from './Advanced';

export default function Add() {
  const { lineageData, domainData, eventsData, addedFiles, setAddedFiles } = useAppContext()
  const [type, setType] = useState("lineage"); // lineage: Dynasty, domain: Kingdom, event: Event
  const [search, setSearch] = useState("");
  const filteredList = (type === "lineage" ? lineageData : type === "domain" ? domainData : eventsData).filter(item => 
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const addFile = (id) => {
   //add from lineageData/domainData/eventData to addedFiles based on id (check if already added)
   const fileToAdd = (type === "lineage" ? lineageData : type === "domain" ? domainData : eventsData).find(item => item.id === id);
   if (fileToAdd && !addedFiles.some(file => file.id === id)) {
     setAddedFiles([...addedFiles, fileToAdd]);
   }
  }

  return (
    <div style={{width: '100%'}}>
      <input 
        type="text" 
        placeholder="Search" 
        className="input input-sm"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      
      <div style={{marginTop:'5px', marginBottom:'2px'}}>
        <select
          id="region-select"
          className="block w-full px-3 py-1 border border-gray-300 transition-colors"
          style={{ fontSize: '12px', borderRadius: '4px' }}
          value={type}
          onChange={e => setType(e.target.value)}
        >
          <option value="lineage">Dynasty</option>
          <option value="domain">Kingdom</option>
          <option value="event">Event</option>
        </select>
      </div>

      <div className='flex flex-col justify-center items-center'
        style={{ border: '1px solid #ccc',borderRadius: '4px'}}
      >
        <ul 
          style={{ 
            width: '160px', 
            height: '220px', 
            overflowY: 'auto', 
            paddingLeft :'5px', 
            paddingRight: '5px', 
            scrollbarWidth: 'thin' // For Firefox
          }}
          className="custom-scrollbar"
        >
          {filteredList.map(item => (
            <AddItem key={item.id} id={item.id} name={item.name} addFile={addFile} />
          ))}
        </ul>
        {/* custom actions button */}
        <div className='h-[30px] mt-1 w-[95%] border-t border-gray-300 flex justify-center items-center'>
          <svg className="w-5 h-5 text-gray-800 dark:text-white cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" 
            width="24" height="24" fill="none" viewBox="0 0 24 24"
            onClick={()=>document.getElementById('my_modal_1').showModal()}
          >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"/>
          </svg>
        </div>
      </div>
      <style>
        {`
          .custom-scrollbar::-webkit-scrollbar {
            width: 6px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #ccc;
            border-radius: 3px;
          }
        `}
      </style>

      {/* Advanced options box */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box" style={{padding:'10px',height:'450px'}}>
          <Advanced />
          <form method="dialog" className='flex justify-end' style={{position:'absolute', top:'5px', right:'5px'}}>
            <button className="bg-transparent border-0 p-0 m-0 cursor-pointer">
              <svg className="w-5 h-5 text-gray-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
              </svg>
            </button>
          </form>
        </div>
      </dialog>
    </div>
  )
}
