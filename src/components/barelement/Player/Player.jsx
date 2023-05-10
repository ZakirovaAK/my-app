//import PlayerControls from '../Player/PlayerControls'
import PlayerControls from './PlayerControls'
import PlayerTrack from './PlayerTrack'
import * as S from '../bar__style'
import { forwardRef } from 'react'

//внутри StyledBar.BarPlayerBlock
const Player = forwardRef(function Player(props, ref) {
    return (
      <S.BarPlayer>
        <PlayerControls ref={ref}/>
        <PlayerTrack />
      </S.BarPlayer>
    )
  })

// const Player = () => {
//   const [isPlaying, setIsPlaying] = useState(false);

//   return (
//     <S.BarPlayer>
//       <PlayerControls
//         isPlaying={isPlaying}
//         onTogglePlay={() => onTogglePlay()}
//       />
//       <PlayerTrack />
//     </S.BarPlayer>
//   )
// }

export default Player
