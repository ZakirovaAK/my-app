import { forwardRef, React } from 'react'
import * as S from '../player_controls__style'
import PlayerBtn from './PlayerBtn'

const PlayerControls = forwardRef(function PlayerControls(props, ref) {
  return (
      <S.PlayerControls>
          <PlayerBtn type="prev" />
          <PlayerBtn type="play" ref={ref} />
          <PlayerBtn type="next" />
          <PlayerBtn type="repeat" />
          <PlayerBtn type="shuffle" />
      </S.PlayerControls>
  )
})

export default PlayerControls
