import * as S from './center_block__style'
import watch from '../../../img/icon/watch.svg'

function CenterBlock(props) {
  return (
    <S.ContentTitle>
      <S.ContentTitleCol>Трек</S.ContentTitleCol>
      <S.ContentTitleCol>ИСПОЛНИТЕЛЬ</S.ContentTitleCol>
      <S.ContentTitleCol>АЛЬБОМ</S.ContentTitleCol>
      <S.ContentTitleCol>
        <S.PlaylistTitleSVG alt="time">
          <image href={watch} />
        </S.PlaylistTitleSVG>
      </S.ContentTitleCol>
    </S.ContentTitle>
  )
}
export default CenterBlock
