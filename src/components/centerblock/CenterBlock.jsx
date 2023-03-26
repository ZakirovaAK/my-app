import * as S from './center_block__style'

function CenterBlock(props) {
  return (
    <S.ContentTitle>
      <S.ContentTitleCol>Трек</S.ContentTitleCol>
      <S.ContentTitleCol>ИСПОЛНИТЕЛЬ</S.ContentTitleCol>
      <S.ContentTitleCol>АЛЬБОМ</S.ContentTitleCol>
      <S.ContentTitleCol>
        <S.PlaylistTitleSVG alt="time">
          <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
        </S.PlaylistTitleSVG>
      </S.ContentTitleCol>
    </S.ContentTitle>
  )
}
export default CenterBlock
