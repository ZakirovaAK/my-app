import CenterBlock from '../CenterBlock/CenterBlock'
import PlayListContent from '../../tracklist/TrackList'

import * as S from './content__style'

function CenterBlockContent(props) {
    return (
      <S.CenterBlockContent>
        <CenterBlock />
        <PlayListContent playlist={props.trackDataList} />
      </S.CenterBlockContent>
    )
  }

  export default CenterBlockContent;