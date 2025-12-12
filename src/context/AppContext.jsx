import React, { createContext, useContext, useState } from 'react'
import tang from '../assets/data/lin/Tang.json'
import shilla from '../assets/data/lin/Shilla.json'
import goguryeo from '../assets/data/lin/Goguryeo.json'
import baekje from '../assets/data/lin/Baekje.json'
import joseon from '../assets/data/lin/Joseon.json'
import qing from '../assets/data/lin/Qing.json'
import ming from '../assets/data/lin/Ming.json'
import goryeo from '../assets/data/lin/Goryeo.json'
import yuan from '../assets/data/lin/Yuan.json'
import han from '../assets/data/lin/Han.json'
import mughal from '../assets/data/lin/Mughal.json'
import domain from '../assets/data/Domain.json'

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
  const [lineageData, setLineageData] = React.useState([tang, shilla, goguryeo, baekje, joseon, qing, ming, goryeo, yuan, han, mughal])
  const [domainData, setDomainData] = React.useState([...domain])
  const [eventsData, setEventsData] = React.useState([])
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
    eventsData,
    setEventsData
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}
