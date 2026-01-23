import React, { createContext, useContext, useState } from 'react'
import domain from '../assets/data/Domain.json'
import lineage from '../assets/data/Lineage.json'
import eventLine from '../assets/data/EventLine.json'
import event from '../assets/data/Event.json'

// Create the context
const AppContext = createContext()

// Custom hook to use the context
export const useAppContext = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider')
  }
  return context
}

// Context provider component
export const AppProvider = ({ children }) => {
  const [scale, setScale] = useState(8)
  const [lineageData, setLineageData] = React.useState([...lineage])
  const [domainData, setDomainData] = React.useState([...domain])
  const [eventLineData, setEventLineData] = React.useState([...eventLine])
  const [eventData, setEventData] = React.useState([...event])
  const [addedFiles, setAddedFiles] = React.useState([])
  const [offSets,setOffsets] = React.useState([]) 

  const value = {
    scale,
    setScale,
    lineageData,
    setLineageData,
    offSets,
    setOffsets,
    addedFiles,
    setAddedFiles,
    domainData,
    setDomainData,
    eventLineData,
    setEventLineData,
    eventData,
    setEventData
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}
