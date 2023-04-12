import React, { useState, useEffect } from 'react'
import { getAllTracks } from '../../../API/API'
import CenterBlock from '../CenterBlock/CenterBlock'
import FilterItem from '../Filter/FilterItem'

import PlayListContent from '../../tracklist/TrackList'
import search from '../../../img/icon/search.svg'

import * as S from './main_center_block__style'

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

export default MainCenterBlock