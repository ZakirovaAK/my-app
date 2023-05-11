import React from 'react'
import * as S from '../player_controls__style'
import sprite from '../../../img/icon/sprite.svg'

const PlayerBtn = ({ type , clickFunction }) => {
  return (
    <S.PlayerBtnSvg alt={type} onClick={clickFunction}>
        <use xlinkHref={`${sprite}#icon-${type}`}></use>
    </S.PlayerBtnSvg>
  )
}

export default PlayerBtn
