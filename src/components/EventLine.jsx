import React from 'react'

export default function EventLine() {

    const { scale } = useAppContext();
    const [height,setHeight]= useState(Math.abs(data.to-data.from)*scale)
    React.useEffect(() => {
        setHeight(Math.abs(data.to-data.from)*scale)}, 
    [scale])

  return (
    <div style={{
      width:'150px',
      marginLeft:'5px',
      marginRight:'2px',
      position:'relative',
      top: offset ? `${offset}px` : '0px'
      }}>
      
    </div>
  )
}
