import React, { useState } from 'react'
import * as StyledBar from './bar__style'
import Player from './Player/Player'
import Volume from './Volume'
import BarPlayerProgress from './Player/BarPlayerProgress'
import { useRef } from 'react'


function Audio() {
  const audioRef = useRef(null)
  const [duration, setDuration] = useState(0)
  const onLoadMetaData = () => {
    setDuration(audioRef.current.duration)
  }

  return (
    <>
      <StyledBar.Audio
        autoplay
        preload="metadata"
        controls
        src="/audio/Bobby_Marleni_-_Dropin.mp3"
        ref={audioRef}
        onLoadedMetadata={onLoadMetaData}
      ></StyledBar.Audio>
      <div>
        <StyledBar.BarContent>
          <BarPlayerProgress ref={audioRef} duration={duration} />
          <StyledBar.BarPlayerBlock>
            <Player ref={audioRef} />
            <Volume />
          </StyledBar.BarPlayerBlock>
        </StyledBar.BarContent>
      </div>
    </>
  )
}

export default Audio
