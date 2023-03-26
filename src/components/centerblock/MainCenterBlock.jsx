import React, { useState } from 'react'
import CenterBlock from './CenterBlock'
import PlayListContent from '../tracklist/TrackList'

import * as S from './main_center_block__style'

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

function Artists(props) {
  const artistsDivs = props.artists.map((element) => (
    <div key={element} className="modal_item">
      {element}
    </div>
  ))
  return (
    <div className="modal_window">
      <div className="modal_window__shell">
        <div className="modal_window_list">{artistsDivs}</div>
      </div>
    </div>
  )
}

function Genre(props) {
  const genreDivs = props.genre.map((element) => (
    <div key={element} className="modal_item">
      {element}
    </div>
  ))
  return (
    <div className="modal_window">
      <div className="modal_window__shell">
        <div className="modal_window_list">{genreDivs}</div>
      </div>
    </div>
  )
}

function Years(props) {
  return (
    <div className="modal_window">
      <div className="modal_window__shell_year">
        <div className="row">
          <input
            id="year-filter-new"
            name="year-filter"
            type="radio"
            value="new"
          />
          <label className="filter__item-year" htmlFor="year-filter-new">
            Более новые
          </label>
        </div>
        <div className="row">
          {' '}
          <input
            id="year-filter-old"
            name="year-filter"
            type="radio"
            value="old"
          />
          <label className="filter__item-year" htmlFor="year-filter-old">
            Более старые
          </label>
        </div>
      </div>
    </div>
  )
}

function MainCenterBlock() {
  // Объявляем state, функцию для его изменения и изначальное значение
  const [openFilter, setOpenFilter] = useState(null)

  function handleClick(newFilter) {
    setOpenFilter(newFilter)
  }

  return (
    <S.MainCenterBlock>
      <S.CenterBlockSearch>
        <svg className="search__svg">
          <use xlinkHref="img/icon/sprite.svg#icon-search" />
        </svg>
        <input
          className="search__text"
          type="search"
          placeholder="Поиск"
          name="search"
        />
      </S.CenterBlockSearch>
      <S.CenterBlockH2>Треки</S.CenterBlockH2>
      <S.CenterBlockFilter>
        <S.FilterTitle>Искать по:</S.FilterTitle>
        <div
          className={
            openFilter === 'artist'
              ? '_btn-text-active button-author'
              : 'filter__button button-author _btn-text'
          }
          onClick={() => {
            handleClick('artist')
          }}
        >
          исполнителю
        </div>
        <div
          className={
            openFilter === 'year'
              ? '_btn-text-active button-year'
              : 'filter__button button-year _btn-text'
          }
          onClick={() => {
            handleClick('year')
          }}
        >
          году выпуска
        </div>
        <div
          className={
            openFilter === 'genre'
              ? '_btn-text-active button-genre'
              : 'filter__button button-genre _btn-text'
          }
          onClick={() => {
            handleClick('genre')
          }}
        >
          жанру
        </div>
      </S.CenterBlockFilter>
      {openFilter === 'artist' && <Artists artists={artists} />}
      {openFilter === 'year' && <Years years={years} />}
      {openFilter === 'genre' && <Genre genre={genre} />}
      <div className="centerblock__content">
        <CenterBlock />
        <PlayListContent />
      </div>
    </S.MainCenterBlock>
  )
}

export default MainCenterBlock
