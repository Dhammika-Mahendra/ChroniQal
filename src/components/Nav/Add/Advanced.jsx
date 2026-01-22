import React from 'react'
import { useAppContext } from '../../../context/AppContext';
import { createEventLine } from '../../../util/functions';

export default function Advanced() {
   
  const { events } = useAppContext();

  const [eventLineName, setEventLineName] = React.useState("");
  const [eventDescription, setEventDescription] = React.useState("text here");
  const [nameSet, setNameSet] = React.useState(false);
  const [addedEvents, setAddedEvents] = React.useState([]);

  const addEvent = (eventId) => {
    const eventToAdd = events.find(event => event.id === eventId);
    if (eventToAdd && !addedEvents.some(event => event.id === eventId)) {
      setAddedEvents([...addedEvents, eventToAdd]);
    }
  }

  const addEventLine = () => {
    const eventLineObj = createEventLine(addedEvents, eventLineName, eventDescription);
    console.log(eventLineObj);
  }

  return (
    <div style={{position:'relative'}}>
        <div style={{position:'relative'}} className='flex flex-col justify-center'>
        <div className='flex justify-start items-center'>
            <input 
                type="text" 
                disabled={nameSet}
                placeholder="Eventline name" 
                className="input input-sm w-[180px]"
                value={eventLineName}
                onChange={e => {setEventLineName(e.target.value);}}
            />
            <div className="bg-white p-2">
                <button className={`btn ${nameSet ? "btn-outline" : "btn-neutral"} btn-xs`}
                    onClick={() => setNameSet(!nameSet)}
                >{nameSet ? "Edit" : "Create"}</button>
            </div>
        </div>
        <div className='w-full flex flex-col justify-between items-center border-t border-gray-300 pt-4'>
            <div className='w-full flex flex-col justify-between items-center'>
                <input 
                type="text" 
                placeholder="Search Events" 
                className="input input-sm w-[100%] mb-1"
                />
                <div className='custom-scrollbar h-[180px] w-[100%] border rounded border-gray-300 overflow-y-scroll'>
                    {events.map((eventItem) => (
                    <div key={eventItem.id} 
                        className='p-1 border-b border-gray-200 w-[100%] cursor-pointer hover:bg-gray-50'
                        onClick={() => addEvent(eventItem.id)}
                    >
                        <p style={{fontSize:'12px'}}>{eventItem.name}</p>
                        <p style={{fontSize:'10px'}}>{eventItem.description}</p>
                    </div>
                ))}
                </div>
            </div>
            <svg className="w- h-4 text-gray-800 dark:text-white pt-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7"/>
            </svg>
            <div className='h-[100px] w-[100%] border rounded border-gray-300 mt-1 flex flex-col 
            justify-start items-start mb-[10px] overflow-y-scroll custom-scrollbar'>
                {addedEvents.map((eventItem) => (
                    <div key={eventItem.id} className='p-1 border-b border-gray-200 w-[100%]'>
                        <p style={{fontSize:'12px'}}>{eventItem.name}</p>
                    </div>
                ))}
            </div>
        </div>
        <button className="btn btn-neutral btn-xs w-[60px] mt-2" 
        style={{position:'absolute',bottom:'-20px',right:'5px'}} onClick={addEventLine}>Add</button>
        </div>
        <style>
            {`
                .custom-scrollbar {
                scrollbar-width: thin;
                scrollbar-color: #ccc transparent;
                }
                .custom-scrollbar::-webkit-scrollbar { width: 6px; }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                background: #ccc;
                border-radius: 3px;
                }
            `}
        </style>
    </div>
  )
}
