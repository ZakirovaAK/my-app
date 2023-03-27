import PlayerControls from './PlayerControls'
import TrackPlayContain from './TrackPlayContain'

import * as StyledVol from './player-volume__style'
import * as StyledBar from './bar__style'

function TrackPlayBtnLike(props) {
  return (
    <div className="track-play__like _btn-icon">
      <svg className="track-play__like-svg" alt="like">
        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
      </svg>
    </div>
  )
}

function TrackPlayBtnDislike(props) {
  return (
    <div className="track-play__dislike _btn-icon">
      <svg className="track-play__dislike-svg" alt="dislike">
        <use xlinkHref="img/icon/sprite.svg#icon-dislike"></use>
      </svg>
    </div>
  )
}

function VolumeBlock(props) {
  return (
    <StyledVol.BarVolumeBlock>
      <StyledVol.VolumeContent>
        <StyledVol.VolumeImage>
          <StyledVol.VolumeSVG ariaLabel="volume">
            <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
          </StyledVol.VolumeSVG>
        </StyledVol.VolumeImage>
        <StyledVol.VolumeProgress>
          <StyledVol.VolumeProgressLine type="range" name="range" />
        </StyledVol.VolumeProgress>
      </StyledVol.VolumeContent>
    </StyledVol.BarVolumeBlock>
  )
}

function TrackPlayLikeDis(props) {
  return (
    <div className="track-play__like-dis">
      <TrackPlayBtnLike />
      <TrackPlayBtnDislike />
    </div>
  )
}

function PlayerTrack(props) {
  return (
    <div className="player__track-play track-play">
      <TrackPlayContain />
      <TrackPlayLikeDis />
    </div>
  )
}

function BarContent(props) {
  return (
    <StyledBar.BarContent>
      <StyledBar.BarPlayerProgress></StyledBar.BarPlayerProgress>
      <StyledBar.BarPlayerBlock>
        <StyledBar.BarPlayer>
          <PlayerControls />
          <PlayerTrack />
        </StyledBar.BarPlayer>
        <VolumeBlock />
      </StyledBar.BarPlayerBlock>
    </StyledBar.BarContent>
  )
}

function BarElement(props) {
  return (
    <div className={props.barClassName}>
      <BarContent></BarContent>
    </div>
  )
}

export default BarElement
