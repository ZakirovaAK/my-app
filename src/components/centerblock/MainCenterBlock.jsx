import React, { useState } from 'react'
import CenterBlock from './CenterBlock'
import PlayListContent from '../tracklist/TrackList'

import * as S from './main_center_block__style'

import SvgImage from '../../svg/svg-image'

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
    <S.ModalWindow>
      <S.ModalWindowShell>
        <S.ModalWindowList>{artistsDivs}</S.ModalWindowList>
      </S.ModalWindowShell>
    </S.ModalWindow>
  )
}

function Genre(props) {
  const genreDivs = props.genre.map((element) => (
    <div key={element} className="modal_item">
      {element}
    </div>
  ))
  return (
    <S.ModalWindow>
      <S.ModalWindowShell>
        <S.ModalWindowList>{genreDivs}</S.ModalWindowList>
      </S.ModalWindowShell>
    </S.ModalWindow>
  )
}

function Years(props) {
  return (
    <S.ModalWindow>
      <S.ModalWindowShellYear>
        <S.Row>
          <input
            id="year-filter-new"
            name="year-filter"
            type="radio"
            value="new"
          />
          <label className="filter__item-year" htmlFor="year-filter-new">
            Более новые
          </label>
        </S.Row>
        <S.Row>
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
        </S.Row>
      </S.ModalWindowShellYear>
    </S.ModalWindow>
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
        <S.SearchSVGWrapper>
          <SvgImage href="img/icon/sprite.svg#icon-search" ariaLabel="search"/>
        </S.SearchSVGWrapper>
        <S.SearchInput
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
      <S.CenterBlockContent>
        <CenterBlock />
        <PlayListContent />
      </S.CenterBlockContent>
    </S.MainCenterBlock>
  )
}

export default MainCenterBlock
