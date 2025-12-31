import React, { useEffect } from 'react'
import Lineage from './lineage'
import { useAppContext } from '../context/AppContext'
import Nav from './Nav/Nav'
import { calcOffsets } from '../util/functions'    
import Timeline from './Timeline'
import Domain from './Domain'

export default function Board() {
    const {scale, offSets, setOffsets, addedFiles} = useAppContext()

    useEffect(() => {
        setOffsets(calcOffsets(...addedFiles)); 
    }, [addedFiles, scale])

    return (
        <div style={{
                height: '100vh', 
                width: '100vw', 
                flexDirection: 'row', 
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'flex-start'
                }}>
                    
            <Nav />

            <div 
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex', 
                    flexDirection: 'row', 
                    alignItems: 'flex-start', 
                    overflowY: 'scroll',
                    backgroundColor: '#f0f0f0',
                    paddingBottom: '20px'
                }}
            >

                <Timeline from={offSets.start} to={offSets.end} scale={scale} />

                <div style={{
                    height: '100%',
                    width: '100%',
                    flexDirection: 'row', 
                    display: 'flex',
                    justifyContent: 'center'
                    }}>
                    {
                        addedFiles.map((data, index) => (
                            data.type === "lineage" ? <Lineage 
                                key={data.id} 
                                data={data.data} 
                                offset={offSets.offset[index]*scale || 0} 
                            /> : 
                            <Domain key={data.id} data={data} offset={offSets.offset[index]*scale || 0} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
