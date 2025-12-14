import React from 'react'
import Ruler from './Ruler.jsx'
import { getColorByIndex } from '../util/functions'

export default function Lineage({data,offset}) {
  return (
    <div style={{
      width:'150px',
      marginLeft:'5px',
      marginRight:'2px',
      position:'relative',
      top: offset ? `${offset}px` : '0px'
      }}>
      {
        data ? data.map((ruler, index) => (
          <Ruler 
            color={getColorByIndex(index)}
            key={index} 
            name={ruler.name} 
            chance={ruler.ch} 
            from={ruler.from} 
            to={ruler.to} 
          />
        )) : <p>Loading...</p>
      }
    </div>
  )
}
