import React, { useState } from 'react'
import { useAppContext } from '../context/AppContext'

export default function Event({ name, from, to, color }) {
  const { scale } = useAppContext();
  const [height, setHeight] = useState(Math.abs(to - from) * scale);
  const [hovered, setHovered] = useState(false);

  React.useEffect(() => {
    setHeight(Math.abs(to - from) * scale);
  }, [scale]);

  return (
    <div
      style={{ 
        backgroundColor: color, 
        boxSizing: 'border-box', 
        paddingLeft: '5px', 
        paddingRight: '5px',
        paddingTop: '5px',
        height: `${height}px`, 
        position: 'relative' }}
      onMouseEnter={name!=='' ? () => setHovered(true) : undefined}
      onMouseLeave={name!=='' ? () => setHovered(false) : undefined}
    >
      {height > 15 ? (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'start', justifyContent: 'space-between' }}>
          <p style={{ fontSize: '12px', lineHeight :'13px' }}>{name}</p>
        </div>
      ) : ''}
      {height > 35 && name !== '' ? (
        <div style={{ fontSize: '10px'}}>
          {from < 0 ? -1 * from : from} {from < 0 && to > 0 ? 'BC' : ''} - {to < 0 ? -1 * to : to} {to < 0 ? 'BC' : 'CE'}
        </div>
      ) : ''}


      {/* Tooltip for less height elements*/}
      {height < 35 && hovered && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translateX(-50%)',
            background: '#9e9d9dff',
            color: '#fdfdfdff',
            padding: '2px 8px',
            borderRadius: '4px',
            fontSize: '11px',
            whiteSpace: 'nowrap',
            marginTop: '0',
            zIndex: 10,
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'start', justifyContent: 'space-between' }}>
            <p style={{ fontSize: '12px' }}>{name}</p>
          </div>
          <div style={{ fontSize: '10px', marginTop: '-2px' }}>
            {from < 0 ? -1 * from : from} {from < 0 && to > 0 ? 'BC' : ''} - {to < 0 ? -1 * to : to} {to < 0 ? 'BC' : 'CE'}
          </div>
        </div>
      )}
    </div>
  );
}
