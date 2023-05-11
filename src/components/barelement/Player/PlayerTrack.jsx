import * as S from '../bar__style'
import TrackPlayContain from '../TrackPlayContain'

import like from '../../../img/icon/like.svg'
import dislike from '../../../img/icon/dislike.svg'

function TrackPlayBtnLike(props) {
    return (
      <S.TrackPlayLikeButton>
        <S.TrackPlayLikeDisButtonSVGWrapper>
          <svg>
            <image href={like} />
          </svg>
        </S.TrackPlayLikeDisButtonSVGWrapper>
      </S.TrackPlayLikeButton>
    )
  }
  
  function TrackPlayBtnDislike(props) {
    return (
      <S.TrackPlayDisButton>
        <S.TrackPlayLikeDisButtonSVGWrapper>
          <svg>
            <image href={dislike} />
          </svg>
        </S.TrackPlayLikeDisButtonSVGWrapper>
      </S.TrackPlayDisButton>
    )
  }

function TrackPlayLikeDis(props) {
    return (
      <S.TrackPlayLikeDis>
        <TrackPlayBtnLike />
        <TrackPlayBtnDislike />
      </S.TrackPlayLikeDis>
    )
  }

function PlayerTrack() {
    return (
        <S.PlayerTrackPlay>
          <TrackPlayContain />
          <TrackPlayLikeDis />
        </S.PlayerTrackPlay>
      )
}
export default PlayerTrack