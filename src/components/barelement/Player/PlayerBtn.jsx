import React, { forwardRef, useState } from 'react'
import * as S from '../player_controls__style'

import prev from '../../../img/icon/prev.svg'
import play from '../../../img/icon/play.svg'
import next from '../../../img/icon/next.svg'
import repeat from '../../../img/icon/repeat.svg'
import shuffle from '../../../img/icon/shuffle.svg'
import pause from '../../../img/icon/pause.svg'

const PlayerBtn = forwardRef(function PlayerBtn({ type }, ref) {
  const [btnType, setBtnType] = useState(type)
  const handleClick = () => {
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
    // <S.PlayerBtnSvg alt={btnType} onClick={() => handleClick()}>
    //     <use xlinkHref={`/img/icon/sprite.svg#icon-${btnType}`}></use>
    // </S.PlayerBtnSvg>
    <S.PlayerBtnSvg alt={btnType} onClick={() => handleClick()}>
      <svg>
        <image href={btnType} />
      </svg>
    </S.PlayerBtnSvg>
  )
})

export default PlayerBtn
