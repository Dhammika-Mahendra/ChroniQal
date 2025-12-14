import React, { useState } from 'react'
import { useAppContext } from '../context/AppContext'
import { getRandomColor } from '../util/functions'

export default function Ruler({ name, chance, from, to }) {
  const { scale } = useAppContext();
  const [height, setHeight] = useState(Math.abs(to - from) * scale);
  const [color, setColor] = useState(name === '' ? 'rgba(0,0,0,0)' : getRandomColor());
  const [hovered, setHovered] = useState(false);

  React.useEffect(() => {
    setHeight(Math.abs(to - from) * scale);
  }, [scale]);

  return (
    <div
      style={{ backgroundColor: color, paddingLeft: '5px', height: `${height}px`, position: 'relative' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {height > 15 ? (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'start', justifyContent: 'space-between' }}>
          <p style={{ fontSize: '12px' }}>{name}</p>
          <p style={{ fontSize: '10px' }}>{chance !== '' ? `[${chance}]` : ''}</p>
        </div>
      ) : ''}
      {height > 35 && name !== '' ? (
        <div style={{ fontSize: '10px', marginTop: '-2px' }}>
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
            background: '#ffffffff',
            color: '#000000ff',
            padding: '2px 8px',
            borderRadius: '4px',
            fontSize: '11px',
            whiteSpace: 'nowrap',
            marginTop: '0',
            zIndex: 10,
            border: '1px solid #747070ff',
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'start', justifyContent: 'space-between' }}>
            <p style={{ fontSize: '12px' }}>{name}</p>
            <p style={{ fontSize: '10px' }}>{chance !== '' ? `[${chance}]` : ''}</p>
          </div>
          <div style={{ fontSize: '10px', marginTop: '-2px' }}>
            {from < 0 ? -1 * from : from} {from < 0 && to > 0 ? 'BC' : ''} - {to < 0 ? -1 * to : to} {to < 0 ? 'BC' : 'CE'}
          </div>
        </div>
      )}
    </div>
  );
}
