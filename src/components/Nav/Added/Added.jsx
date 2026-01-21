import React from 'react'
import { useAppContext } from '../../../context/AppContext'
import AddedItem from './AddedItem'

export default function () {
    
  const { addedFiles, setAddedFiles } = useAppContext()

  const deleteFile = (id) => {
    //remove from addedFiles based on id
    const updatedFiles = addedFiles.filter(item => item.id !== id);
    setAddedFiles(updatedFiles);
 }

  return (
        <div>
          <ul style={{height: '220px', overflowY: 'auto', paddingLeft :'5px', paddingRight: '5px', 
            marginTop: '10px', border: '1px solid #ccc', borderRadius: '4px'}}>
            {addedFiles.map(item => (
              <AddedItem key={item.id} id={item.id} name={item.name} deleteFile={deleteFile}/>
            ))}
          </ul>
        </div>
  )
}
