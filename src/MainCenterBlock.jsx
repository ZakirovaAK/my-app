import React, { useState } from 'react'
import CenterBlock from './CenterBlock'
import PlayListContent from './TrackList'

const artists = [
  'Nero',
  'Dynoro',
  'Outwork',
  'Mr. Gee',
  'Ali Bakgor',
  'Стоункат',
  'Psychopath',
  'Jaded',
  'Will Clarke',
  'AR/CO',
]
const years = ['Более новые', 'Более старые']
const genre = ['Рок', 'Хип-хоп', 'Техно', 'Инди']

function FilterByAuthor(props) {
  return (
    <div
      className={
        isActiveButtonFilterArtists
          ? '_btn-text-active button-author'
          : 'filter__button button-author _btn-text'
      }
      onClick={() => {
        setOpenedArtists(!isOpenedArtists)
        setOpenedYear(false)
        setOpenedGenre(false)
        setActiveButtonFilterArtists(!isActiveButtonFilterArtists)
        setActiveButtonFilterYear(false)
        setActiveButtonFilterGenre(false)
      }}
    >
      исполнителю
    </div>
  )
}

function FilterByYear(props) {
  return (
    <div
      className={
        isActiveButtonFilterYear
          ? '_btn-text-active button-year'
          : 'filter__button button-year _btn-text'
      }
      onClick={() => {
        setOpenedYear(!isOpenedYear)
        setOpenedArtists(false)
        setOpenedGenre(false)
        setActiveButtonFilterYear(!isActiveButtonFilterYear)
        setActiveButtonFilterArtists(false)
        setActiveButtonFilterGenre(false)
      }}
    >
      году выпуска
    </div>
  )
}

function FilterByGenre(props) {
  return (
    <div
      className={
        isActiveButtonFilterGenre
          ? '_btn-text-active button-genre'
          : 'filter__button button-genre _btn-text'
      }
      onClick={() => {
        setOpenedGenre(!isOpenedGenre)
        setOpenedYear(false)
        setOpenedArtists(false)
        setActiveButtonFilterGenre(!isActiveButtonFilterGenre)
        setActiveButtonFilterArtists(false)
        setActiveButtonFilterYear(false)
      }}
    >
      жанру
    </div>
  )
}

function Artists(props) {
  const artistsDivs = props.artists.map((element) => (
    <div key={element} className="modal_artist">
      {element}
    </div>
  ))
  return (
    <div className="modal_window_artist">
      <div className="modal_window_artist_list">
        {artistsDivs}
      </div>
    </div>
  )
}

function Genre(props) {
  const genreDivs = props.genre.map((element) => (
    <div key={element} className="modal_genre">
      {element}
    </div>
  ))
  return (
    <div className="modal_window_year">
      <div className="modal_window_year_list">
        {genreDivs}
      </div>
    </div>
  )
}

function MainCenterBlock() {
  // Объявляем state, функцию для его изменения и изначальное значение
  const [isOpenedArtists, setOpenedArtists] = useState(false)
  const [isOpenedYear, setOpenedYear] = useState(false)
  const [isOpenedGenre, setOpenedGenre] = useState(false)
  const [isActiveButtonFilterArtists, setActiveButtonFilterArtists] =
    useState(false)
  const [isActiveButtonFilterYear, setActiveButtonFilterYear] = useState(false)
  const [isActiveButtonFilterGenre, setActiveButtonFilterGenre] =
    useState(false)

  return (
    <div className="main__centerblock centerblock">
      <div className="centerblock__search search">
        <svg className="search__svg">
          <use xlinkHref="./img/icon/sprite.svg#icon-search" />
        </svg>
        <input
          className="search__text"
          type="search"
          placeholder="Поиск"
          name="search"
        />
      </div>
      <h2 className="centerblock__h2">Треки</h2>
      <div className="centerblock__filter filter">
        <div className="filter__title">Искать по:</div>
        <div
          className={
            isActiveButtonFilterArtists
              ? '_btn-text-active button-author'
              : 'filter__button button-author _btn-text'
          }
          onClick={() => {
            setOpenedArtists(!isOpenedArtists)
            setOpenedYear(false)
            setOpenedGenre(false)
            setActiveButtonFilterArtists(!isActiveButtonFilterArtists)
            setActiveButtonFilterYear(false)
            setActiveButtonFilterGenre(false)
          }}
        >
          исполнителю
        </div>
        <div
          className={
            isActiveButtonFilterYear
              ? '_btn-text-active button-year'
              : 'filter__button button-year _btn-text'
          }
          onClick={() => {
            setOpenedYear(!isOpenedYear)
            setOpenedArtists(false)
            setOpenedGenre(false)
            setActiveButtonFilterYear(!isActiveButtonFilterYear)
            setActiveButtonFilterArtists(false)
            setActiveButtonFilterGenre(false)
          }}
        >
          году выпуска
        </div>
        <div
          className={
            isActiveButtonFilterGenre
              ? '_btn-text-active button-genre'
              : 'filter__button button-genre _btn-text'
          }
          onClick={() => {
            setOpenedGenre(!isOpenedGenre)
            setOpenedYear(false)
            setOpenedArtists(false)
            setActiveButtonFilterGenre(!isActiveButtonFilterGenre)
            setActiveButtonFilterArtists(false)
            setActiveButtonFilterYear(false)
          }}
        >
          жанру
        </div>
      </div>
      {isOpenedArtists && <Artists artists={artists} />}
      {isOpenedYear && <Genre genre={genre}/>}
      {isOpenedGenre && <Genre genre={genre}/>}
      <div className="centerblock__content">
        <CenterBlock />
        <PlayListContent />
      </div>
    </div>
  )
}

export default MainCenterBlock
