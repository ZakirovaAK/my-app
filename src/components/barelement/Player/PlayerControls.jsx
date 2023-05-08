import { forwardRef, React } from 'react'
import * as S from '../player_controls__style'
import PlayerBtn from './PlayerBtn'
// const PlayerControls = forwardRef((props, ref) => {})

// import iconPrev from '../../img/icon/prev.svg'
// import iconPlay from '../../img/icon/play.svg'
// import iconNext from '../../img/icon/next.svg'
// import iconRepeat from '../../img/icon/repeat.svg'
// import iconShuffle from '../../img/icon/shuffle.svg'
// import iconPause from '../../img/icon/pause.svg'

// function PlayerBtnPrev(params) {
//   return (
//     <S.PlayerBtnPrev>
//       <S.PlayerBtnPrevSvg alt="prev">
//         <svg>
//           <image href={iconPrev} />
//         </svg>
//       </S.PlayerBtnPrevSvg>
//     </S.PlayerBtnPrev>
//   )
// }

// function PlayerBtnPlay(params) {
//   return (
//     <S.PlayerBtnPlay>
//       <S.PlayerBtnPlaySvg alt="play">
//         <svg>
//           <image href={iconPlay} />
//         </svg>
//       </S.PlayerBtnPlaySvg>
//     </S.PlayerBtnPlay>
//   )
// }

// function PlayerBtnNext(params) {
//   return (
//     <S.PlayerBtnNext>
//       <S.PlayerBtnNextSvg alt="next">
//         <svg>
//           <image href={iconNext} />
//         </svg>
//       </S.PlayerBtnNextSvg>
//     </S.PlayerBtnNext>
//   )
// }

// function PlayerBtnRepeat(params) {
//   return (
//     <S.PlayerBtnRepeat>
//       <S.PlayerBtnRepeatSvg alt="repeat">
//         <svg>
//           <image href={iconRepeat} />
//         </svg>
//       </S.PlayerBtnRepeatSvg>
//     </S.PlayerBtnRepeat>
//   )
// }

// function PlayerBtnShuffle(params) {
//   return (
//     <S.PlayerBtnShuffle>
//       <S.PlayerBtnShuffleSvg>
//         <svg>
//           <image href={iconShuffle} />
//         </svg>
//       </S.PlayerBtnShuffleSvg>
//     </S.PlayerBtnShuffle>
//   )
// }

const PlayerControls = forwardRef(function PlayerControls(props, ref) {
  return (
      <S.PlayerControls>
          <PlayerBtn type="prev" />
          <PlayerBtn type="play" ref={ref} />
          <PlayerBtn type="next" />
          <PlayerBtn type="repeat" />
          <PlayerBtn type="shuffle" />
      </S.PlayerControls>
  )
})

// const PlayerControls = ({ isPlaying, onTogglePlay }) => {
//   return (
//     <S.PlayerControls>
//       <PlayerBtnPrev />
//       {/* <PlayerBtnPlay onClick={() => onTogglePlay()}/> */}
//       <S.PlayerBtnPlay onClick={() => onTogglePlay()}>
//         {isPlaying ? (
//           <S.PlayerBtnPlaySvg alt="pause">
//             <svg>
//               <image href={iconPause} />
//             </svg>
//           </S.PlayerBtnPlaySvg>
//         ) : (
//           <S.PlayerBtnPlaySvg alt="play">
//             <svg>
//               <image href={iconPlay} />
//             </svg>
//           </S.PlayerBtnPlaySvg>
//         )}
//       </S.PlayerBtnPlay>
//       <PlayerBtnNext />
//       <PlayerBtnRepeat />
//       <PlayerBtnShuffle />
//     </S.PlayerControls>
//   )
// }

export default PlayerControls
