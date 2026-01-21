import React, { useState } from 'react'
import { useAppContext } from '../../../context/AppContext'
import AddItem from './AddItem';

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
          className="block w-full px-3 py-1 border border-gray-300 rounded-sm transition-colors"
          style={{ fontSize: '12px' }}
          value={type}
          onChange={e => setType(e.target.value)}
        >
          <option value="lineage">Dynasty</option>
          <option value="domain">Kingdom</option>
          <option value="event">Event</option>
        </select>
      </div>

      <ul 
        style={{ 
          width: '160px', 
          height: '200px', 
          overflowY: 'auto', 
          paddingLeft :'5px', 
          paddingRight: '5px', 
          border: '1px solid #ccc',
          scrollbarWidth: 'thin' // For Firefox
        }}
        className="custom-scrollbar"
      >
        {filteredList.map(item => (
          <AddItem key={item.id} id={item.id} name={item.name} addFile={addFile} />
        ))}
      </ul>
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
    </div>
  )
}
