import PlayerControls from './PlayerControls'
import TrackPlayContain from './TrackPlayContain'

import SvgImage from '../../svg/svg-image'

import * as StyledVol from './player-volume__style'
import * as StyledBar from './bar__style'

function TrackPlayBtnLike(props) {
  return (
    <StyledBar.TrackPlayLikeButton>
      <StyledBar.TrackPlayLikeDisButtonSVGWrapper>
        <SvgImage href="img/icon/sprite.svg#icon-like" ariaLabel="like" />
      </StyledBar.TrackPlayLikeDisButtonSVGWrapper>
    </StyledBar.TrackPlayLikeButton>
  )
}

function TrackPlayBtnDislike(props) {
  return (
    <StyledBar.TrackPlayDisButton>
      <StyledBar.TrackPlayLikeDisButtonSVGWrapper>
        <SvgImage href="img/icon/sprite.svg#icon-dislike" ariaLabel="dislike" />
      </StyledBar.TrackPlayLikeDisButtonSVGWrapper>
    </StyledBar.TrackPlayDisButton>
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
    <StyledBar.TrackPlayLikeDis>
      <TrackPlayBtnLike />
      <TrackPlayBtnDislike />
    </StyledBar.TrackPlayLikeDis>
  )
}

function PlayerTrack(props) {
  return (
    <StyledBar.PlayerTrackPlay>
      <TrackPlayContain />
      <TrackPlayLikeDis />
    </StyledBar.PlayerTrackPlay>
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
    <div>
      <BarContent></BarContent>
    </div>
  )
}

export default BarElement
