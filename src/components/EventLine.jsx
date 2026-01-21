import React from 'react'
import Event from './Event'
import { getColorByIndex } from '../util/functions'

export default function EventLine({ data, offset }) {
return (
    <div style={{
      width:'150px',
      marginLeft:'5px',
      marginRight:'2px',
      position:'relative',
      top: offset ? `${offset}px` : '0px'
      }}>
      {
        data ? data.map((event, index) => (
          <Event 
            color={event.name === '' ? '' : getColorByIndex(index)}
            key={index} 
            name={event.name} 
            from={event.from} 
            to={event.to} 
          />
        )) : <p>Loading...</p>
      }
    </div>
  )
}
