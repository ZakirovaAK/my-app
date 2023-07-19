import { useContext } from 'react'
import { Context } from '../../../context/ThemeContext'

import * as S from './search__style'

import search from '../../../img/icon/search.svg'

function SearchBlock() {
  const { themeType } = useContext(Context)
  
  return (
    <S.CenterBlockSearch>
      <S.SearchSVGWrapper>
        <svg>
          {/* <image href={search} />  */}
          <use xlinkHref={`../../../img/icon/sprite.svg#icon-search-${themeType}`}></use>
        </svg>
      </S.SearchSVGWrapper>
      <S.SearchInput type="search" placeholder="Поиск" name="search" />
    </S.CenterBlockSearch>
  )
}

export default SearchBlock
