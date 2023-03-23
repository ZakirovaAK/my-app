import logo from './img/logo.png'
import './App.css'
import MainCenterBlock from './MainCenterBlock'
import Menu from './Menu'

import React, { useState, useEffect } from 'react'
import PlayerControls from './PlayerControls'
import SideBarBlock from './SideBarBlock'
import TrackPlayContain from './TrackPlayContain'

function MainElement(props) {
  return (
    <main className="main">
      <Menu/>
      <MainCenterBlock/>

      <div className="main__sidebar sidebar">
        <div className="sidebar__personal">
          <p className="sidebar__personal-name">Alina.Zakirova</p>
          <div className="sidebar__avatar"></div>
        </div>
        <SideBarBlock/>
      </div>
    </main>
  )
}

function VolumeContent(props) {
  return (
    <div className="volume__content">
      <div className="volume__image">
        <svg className="volume__svg" alt="volume">
          <use xlinkHref="img/icon/sprite.svg#icon-volume"></use>
        </svg>
      </div>
      <div className="volume__progress _btn">
        <input
          className="volume__progress-line _btn"
          type="range"
          name="range"
        />
      </div>
    </div>
  )
}

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
      <TrackPlayContain/>
      <TrackPlayLikeDis />
    </div>
  )
}

function BarElement(props) {
  return (
    <div className={props.barClassName}>
      <div className="bar content">
        <div className="bar__player-progress"></div>
        <div className="bar__player-block">
          <div className="bar__player player">
            <PlayerControls />
            <PlayerTrack />
          </div>
          <div className="bar__volume-block volume">
            <VolumeContent />
          </div>
        </div>
      </div>
    </div>
  )
}

function Footer(props) {
  return <footer className={props.footerClassName}></footer>
}

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <MainElement mainClassName="main" />
        <BarElement barClassName="bar" />
        <Footer footerClassName="footer" />
      </div>
    </div>
  )
}

export default App
