import React, { useEffect, useState } from 'react'
import SkeletonImage from './skeletons/skeleton-img'
import SkeletonTitle from './skeletons/skeleton-title'

function PlayListItem(props) {
  return (
    <div className="playlist__item">
      <div className="playlist__track track">
        <div className="track__title">
          <div className="track__title-image">
            {props.isLoading === true ? (
              <SkeletonImage />
            ) : (
              <div className="track__title-image">
                <div className="track__title-svg">
                  <svg className="track__title-svg" alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                  </svg>
                </div>
              </div>
            )}
          </div>
          <div className="track__title-text">
            {props.isLoading === true ? (
              <SkeletonTitle />
            ) : (
              <a className="track__title-link" href="http://">
                {props.track}{' '}
                <span className="track__title-span">{props.trackRemix}</span>
              </a>
            )}
          </div>
        </div>
        <div className="track__author">
          {props.isLoading === true ? (
            <SkeletonTitle />
          ) : (
            <a className="track__author-link" href="http://">
              {props.author}
            </a>
          )}
        </div>
        <div className="track__album">
          {props.isLoading === true ? (
            <SkeletonTitle />
          ) : (
            <a className="track__album-link" href="http://">
              {props.album}
            </a>
          )}
        </div>
        <div className="track__time">
          <svg className="track__time-svg" alt="time">
            <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
          </svg>
          <span className="track__time-text">{props.time}</span>
        </div>
      </div>
    </div>
  )
}

function PlayListContent(props) {
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
    <div className="content__playlist playlist">
      <PlayListItem
        isLoading={status}
        track="Guilt"
        author="Nero"
        album="Welcome Reality"
        time="4:44"
      />
      <PlayListItem
        isLoading={status}
        track="Elektro"
        author="Dynoro, Outwork, Mr. Gee"
        album="Elektro"
        time="2:22"
      />
      <PlayListItem
        isLoading={status}
        track="I’m Fire"
        author="Ali Bakgor"
        album="I’m Fire"
        time="2:22"
      />
      <PlayListItem
        isLoading={status}
        track="Non Stop{' '}"
        trackRemix="(Remix)"
        author="Стоункат, Psychopath"
        album="Non Stop"
        time="4:12"
      />
      <PlayListItem
        isLoading={status}
        track="Run Run{' '}"
        trackRemix="(feat. AR/CO)"
        author="Jaded, Will Clarke, AR/CO"
        album="Run Run"
        time="2:54"
      />
      <PlayListItem
        isLoading={status}
        track="Eyes on Fire{' '}"
        trackRemix="(Zeds Dead Remix)"
        author="Blue Foundation, Zeds Dead"
        album="Eyes on Fire"
        time="5:20"
      />
      <PlayListItem
        isLoading={status}
        track="Mucho Bien{' '}"
        trackRemix="(Hi Profile Remix)"
        author="HYBIT, Mr. Black, Offer Nissim, Hi Profile"
        album="Mucho Bien"
        time="3:41"
      />
      <PlayListItem
        isLoading={status}
        track="Knives n Cherries{' '}"
        author="minthaze"
        album="Captivating"
        time="1:48"
      />
      <PlayListItem
        isLoading={status}
        track="How Deep Is Your Love{' '}"
        author="Calvin Harris, Disciples"
        album="How Deep Is Your Love"
        time="3:32"
      />
      <PlayListItem
        isLoading={status}
        track="Morena"
        author="Tom Boxer"
        album="Soundz Made in Romania"
        time="3:36"
      />
      <PlayListItem isLoading={status} track="" author="" album="" time="" />
    </div>
  )
}

export default PlayListContent
