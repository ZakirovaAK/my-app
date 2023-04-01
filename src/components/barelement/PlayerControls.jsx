import * as S from './player_controls__style'

import SvgImage from '../../svg/svg-image'

// import iconPrev from '../../img/icon/prev.svg' 

function PlayerBtnPrev(params) {
  return (
    <S.PlayerBtnPrev>
      <S.PlayerBtnPrevSvg alt="prev">
        <SvgImage href={`/img/icon/sprite.svg#icon-prev`} ariaLabel="prev" />
      </S.PlayerBtnPrevSvg>
    </S.PlayerBtnPrev>
  )
}

{/* <div class="player__btn-play _btn">
    <svg class="player__btn-play-svg" alt="play">
        <use xlink:href="img/icon/sprite.svg#icon-play"></use>
    </svg>
</div> */}

function PlayerBtnPlay(params) {
  return (
    <S.PlayerBtnPlay>
      <S.PlayerBtnPlaySvg alt="play">
        <SvgImage href={`/img/icon/sprite.svg#icon-play`} ariaLabel="play" />
      </S.PlayerBtnPlaySvg>
    </S.PlayerBtnPlay>
  )
}

function PlayerBtnNext(params) {
  return (
    <S.PlayerBtnNext>
      <S.PlayerBtnNextSvg alt="next">
        <SvgImage href="/img/icon/sprite.svg#icon-next" ariaLabel="next" />
      </S.PlayerBtnNextSvg>
    </S.PlayerBtnNext>
  )
}

function PlayerBtnRepeat(params) {
  return (
    <S.PlayerBtnRepeat>
      <S.PlayerBtnRepeatSvg alt="repeat">
        <SvgImage href="/img/icon/sprite.svg#icon-repeat" ariaLabel="repeat" />
      </S.PlayerBtnRepeatSvg>
    </S.PlayerBtnRepeat>
  )
}

function PlayerBtnShuffle(params) {
  return (
    <S.PlayerBtnShuffle>
      <S.PlayerBtnShuffleSvg>
        <SvgImage href="/img/icon/sprite.svg#icon-shuffle" ariaLabel="shuffle" />
      </S.PlayerBtnShuffleSvg>
    </S.PlayerBtnShuffle>
  )
}

function PlayerControls(props) {
  return (
    <S.PlayerControls>
      <PlayerBtnPrev />
      <PlayerBtnPlay />
      <PlayerBtnNext />
      <PlayerBtnRepeat />
      <PlayerBtnShuffle />
    </S.PlayerControls>
  )
}

export default PlayerControls
