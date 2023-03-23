import React, { useState, useEffect } from 'react'
import SkeletonImage from './skeletons/skeleton-img'
import SkeletonTitle from './skeletons/skeleton-title'

// import img_note from 'img/icon/sprite.svg#icon-note'

function TrackPlayImg(props) {
  return (
    <div className="track-play__image-wrapper">
      {props.isLoading === true ? (
        <SkeletonImage />
      ) : (
        <div className="track-image">
          <svg className="track-play__svg" aria-label="music">
            <use xlinkHref="./img/icon/sprite.svg#icon-note"></use>
          </svg>
        </div>
      )}
    </div>
  )
}

function TrackPlayAuth(props) {
  return (
    <div className="track-play__author">
      {props.isLoading === true ? (
        <SkeletonTitle />
      ) : (
        <a className="track-play__author-link" href="http://">
          Ты та...
        </a>
      )}
    </div>
  )
}

function TrackPlayAlbum(props) {
  return (
    <div className="track-play__album">
      {props.isLoading === true ? (
        <SkeletonTitle />
      ) : (
        <a className="track-play__album-link" href="http://">
          Баста
        </a>
      )}
    </div>
  )
}

function TrackPlayContain(props) {
  const [status, setStatus] = useState(true);
  useEffect(() => {
    const loadTimer = setTimeout(() => {
      setStatus(false)
    }, 5000)
    return () => {
      clearTimeout(loadTimer)
    }
  })
  return (
    <div className="track-play__contain">
      <TrackPlayImg isLoading={status} />
      <TrackPlayAuth isLoading={status}/>
      <TrackPlayAlbum isLoading={status}/>
    </div>
  );
};

export default TrackPlayContain
