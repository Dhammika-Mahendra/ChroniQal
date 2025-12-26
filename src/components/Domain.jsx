import React, { useEffect, useState } from 'react'
import { getRandomColor } from '../util/functions'
import { useAppContext } from '../context/AppContext'

export default function Domain({data, offset}) {

  const { scale } = useAppContext();
  const [height,setHeight]= useState(Math.abs(data.to-data.from)*scale)
  const [color,setColor]= useState(getRandomColor())
  React.useEffect(() => {
      setHeight(Math.abs(data.to-data.from)*scale)}, 
  [scale])

  return (
    <div style={{
        height: `${height}px`,
        width:'150px',
        marginLeft:'5px',
        marginRight:'2px',
        position:'relative',
        paddingLeft:'5px',
        paddingRight:'5px',
        paddingTop:'5px',
        top: offset ? `${offset}px` : '0px',
        backgroundColor: color
        }}>
            <p style={{fontSize:'14px',lineHeight:'15px'}}>{data.name}</p>
            <p style={{fontSize:'13px', marginTop: '-2px'}}>{data.from < 0 ? -1 * data.from : data.from} {data.from < 0 && data.to > 0 ? 'BC' : ''} - {data.to < 0 ? -1 * data.to : data.to} {data.to < 0 ? 'BC' : 'CE'}</p>
    </div>
  )
}
