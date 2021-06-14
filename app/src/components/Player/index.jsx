import React from 'react'
import ReactPlayer from 'react-player'
import "./index.css"


const index = () => {
    return (
    <div className='player-wrapper'>
        <ReactPlayer
            className='react-player'
            url='https://www.youtube.com/watch?v=A_LPDke9F94'
            width='100%'
            height='80vh'
            config={{
                youtube: {
                    playerVars: { showinfo: 1 },
                    embedOptions: true
                }
            }}
        />
    </div>
    )
}

export default index
