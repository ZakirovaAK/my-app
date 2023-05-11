import { forwardRef, React, useState } from 'react'
import * as S from '../player_controls__style'
import PlayerBtn from './PlayerBtn'

const PlayerControls = forwardRef(function PlayerControls(props, ref) {
  /* Начальное состояние - кнопка воспроизведения */
  const [btnType, setBtnType] = useState('play')

  const handlePlayPauseClick = () => {
    console.log('Clicked. The value = ', btnType)
    if (btnType === 'play') {
      setBtnType('pause')
      ref.current.play()
    }

    if (btnType === 'pause') {
      setBtnType('play')
      ref.current.pause()
    }
  }

  return (
      <S.PlayerControls>
          <PlayerBtn type="prev" />
          <PlayerBtn type={btnType} clickFunction={handlePlayPauseClick} />
          <PlayerBtn type="next" />
          <PlayerBtn type="repeat" />
          <PlayerBtn type="shuffle" />
      </S.PlayerControls>
  )
})

export default PlayerControls
