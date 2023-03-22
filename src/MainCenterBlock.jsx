import React, { useState } from 'react';
import CenterBlock from './CenterBlock';
import PlayListContent from './TrackList';

function FilterButton({ text, isClicked }) {
  return (
    <div
      className={
        isClicked
          ? 'filter__button filter__button__clicked _btn-text'
          : 'filter__button _btn-text'
      }
    >
      {text}
    </div>
  )
}

function MainCenterBlock(props) {
  // Объявляем state, функцию для его изменения и изначальное значение
  const [isClickedAuthor, setisClickedAuthor] = useState(false);

  return (
    <div className="main__centerblock centerblock">
      <div className="centerblock__search search">
        <svg className="search__svg">
          <use xlinkHref="./img/icon/sprite.svg#icon-search"></use>
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
        {/* <div className="filter__button button-author _btn-text">
          исполнителю
        </div> */}
        <FilterButton text="исполнителю" isClicked=isClickedAuthor/>
        <div className="filter__button button-year _btn-text">году выпуска</div>
        <div className="filter__button button-genre _btn-text">жанру</div>
      </div>
      <div className="centerblock__content">
        <CenterBlock />
        <PlayListContent />
      </div>
    </div>
  )
}
export default MainCenterBlock
