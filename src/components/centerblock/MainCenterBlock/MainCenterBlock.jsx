import React, { useState, useEffect } from 'react'
import { getAllTracks } from '../../../API/API'
import CenterBlock from '../CenterBlock/CenterBlock'
import FilterItem from '../Filter/FilterItem'

import PlayListContent from '../../tracklist/TrackList'

import search from '../../../img/icon/search.svg'

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
    <S.ModalItem key={element}>{element}</S.ModalItem>
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
    <S.ModalItem key={element}>{element}</S.ModalItem>
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

function Filter({ tracks }) {
  const [isDropdownsOpen, setIsDropdownsOpen] = useState(null)
  const toggleDropDown = (type) => {
    if (type === isDropdownsOpen) {
      setIsDropdownsOpen(null)
      return
    }
    setIsDropdownsOpen(type)
  }
  return (
    <S.Filter>
      <S.FilterTitle>Искать по:</S.FilterTitle>
      <FilterItem
        name={'исполнителю'}
        tracks={tracks}
        type={'author'}
        isDropdownsOpen={isDropdownsOpen === 'author'}
        toggleDropDown={toggleDropDown}
        setIsDropdownsOpen={setIsDropdownsOpen}
      />
      <FilterItem
        name={'году выпуска'}
        tracks={tracks}
        type={'year'}
        isDropdownsOpen={isDropdownsOpen === 'year'}
        toggleDropDown={toggleDropDown}
      />
      <FilterItem
        name={'жанру'}
        tracks={tracks}
        type={'genre'}
        isDropdownsOpen={isDropdownsOpen === 'genre'}
        toggleDropDown={toggleDropDown}
      />
    </S.Filter>
  )
}

function MainCenterBlock() {
  const [tracks, setTracks] = useState([])
  useEffect(() => {
    getAllTracks().then((data) => setTracks(data))
  }, [])

  return (
    <S.MainCenterBlock>
      <S.CenterBlockSearch>
        <S.SearchSVGWrapper>
          <svg>
            <image href={search} />
          </svg>
        </S.SearchSVGWrapper>
        <S.SearchInput type="search" placeholder="Поиск" name="search" />
      </S.CenterBlockSearch>
      <S.CenterBlockH2>Треки</S.CenterBlockH2>
      <Filter tracks={tracks} />
      <S.CenterBlockContent>
        <CenterBlock />
        <PlayListContent />
      </S.CenterBlockContent>
    </S.MainCenterBlock>
  )
}

// function MainCenterBlock() {
//   // Объявляем state, функцию для его изменения и изначальное значение
//   const [openFilter, setOpenFilter] = useState(null)

//   function handleClick(newFilter) {
//     setOpenFilter(newFilter)
//   }

//   return (
//     <S.MainCenterBlock>
//       <S.CenterBlockSearch>
//         <S.SearchSVGWrapper>
//           <svg>
//           <image href={search} />
//         </svg>
//         </S.SearchSVGWrapper>
//         <S.SearchInput type="search" placeholder="Поиск" name="search" />
//       </S.CenterBlockSearch>
//       <S.CenterBlockH2>Треки</S.CenterBlockH2>
//       <S.CenterBlockFilter>
//         <S.FilterTitle>Искать по:</S.FilterTitle>
//         <div
//           className={`button-author filter__button ${openFilter === 'artist'? '_btn-text-active': '_btn-text'  }`}
//           // openFilter === 'artist'
//           //   ? '_btn-text-active button-author'
//           //   : 'filter__button button-author _btn-text'
//           onClick={() => {
//             handleClick('artist')
//           }}
//         >
//           исполнителю
//         </div>
//         <div
//           className={
//             openFilter === 'year'
//               ? '_btn-text-active button-year'
//               : 'filter__button button-year _btn-text'
//           }
//           onClick={() => {
//             handleClick('year')
//           }}
//         >
//           году выпуска
//         </div>
//         <div
//           className={
//             openFilter === 'genre'
//               ? '_btn-text-active button-genre'
//               : 'filter__button button-genre _btn-text'
//           }
//           onClick={() => {
//             handleClick('genre')
//           }}
//         >
//           жанру
//         </div>
//       </S.CenterBlockFilter>
//       {openFilter === 'artist' && <Artists artists={artists} />}
//       {openFilter === 'year' && <Years years={years} />}
//       {openFilter === 'genre' && <Genre genre={genre} />}
//       <S.CenterBlockContent>
//         <CenterBlock />
//         <PlayListContent />
//       </S.CenterBlockContent>
//     </S.MainCenterBlock>
//   )
// }

export default MainCenterBlock
