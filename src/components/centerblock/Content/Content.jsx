import CenterBlock from '../CenterBlock/CenterBlock'
import PlayListContent from '../../tracklist/TrackList'

import * as S from './content__style'

function CenterBlockContent({playlist}) {
    return (
      <S.CenterBlockContent>
        <CenterBlock />
        <PlayListContent playlist={playlist} />
      </S.CenterBlockContent>
    )
  }

  export default CenterBlockContent;