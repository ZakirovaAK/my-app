import React, { useState, useEffect } from 'react'
import SkeletonImage from '../../skeletons/skeleton-img'
import SkeletonTitle from '../../skeletons/skeleton-title'

// import img_note from 'img/icon/sprite.svg#icon-note'
import * as S from './track_play_contain__style'

function TrackPlayImg(props) {
  return (
    <S.TrackPlayImgWrapper>
      {props.isLoading ? (
        <SkeletonImage />
      ) : (
        <S.TrackImg>
          <svg className="track-play__svg" aria-label="music">
            <use xlinkHref="./img/icon/sprite.svg#icon-note"></use>
          </svg>
        </S.TrackImg>
      )}
    </S.TrackPlayImgWrapper>
  )
}

function TrackPlayAuth(props) {
  return (
    <S.TrackPlayAuthor>
      {props.isLoading ? (
        <SkeletonTitle />
      ) : (
        <S.TrackPlayAuthorLink href="http://">
          Ты та...
        </S.TrackPlayAuthorLink>
      )}
    </S.TrackPlayAuthor>
  )
}

function TrackPlayAlbum(props) {
  return (
    <S.TrackPlayAlbum>
      {props.isLoading ? (
        <SkeletonTitle />
      ) : (
        <S.TrackPlayAlbumLink href="http://">
          Баста
        </S.TrackPlayAlbumLink>
      )}
    </S.TrackPlayAlbum>
  )
}

function TrackPlayContain(props) {
  const [status, setStatus] = useState(true)
  useEffect(() => {
    const loadTimer = setTimeout(() => {
      setStatus(false)
    }, 5000)
    return () => {
      clearTimeout(loadTimer)
    }
  })
  return (
    <S.TrackPlayContain>
      <TrackPlayImg isLoading={status} />
      <TrackPlayAuth isLoading={status} />
      <TrackPlayAlbum isLoading={status} />
    </S.TrackPlayContain>
  )
}

export default TrackPlayContain
