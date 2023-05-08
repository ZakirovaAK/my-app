import React, { forwardRef, useEffect, useState } from 'react'
import * as S from '../player_controls__style'

const countTrackTime = (secDuraction) => {
  const min = Math.floor(secDuraction / 60)

  const sec = Math.floor(secDuraction - min * 60)

  return `${min}:${sec} `
}

const BarPlayerProgress = forwardRef(function BarPlayerProgress({ duration },ref) {
  const [range, setRange] = useState(0)

  useEffect(() => {
    let timer = setInterval(() => {
      if (ref.current) {
        setRange(ref.current.currentTime)
      }
    }, 50)
    return () => clearInterval(timer)
  })
  const handleClick = (e) => {
    ref.current.currentTime = e.target.value
  }
  return (
    <>
      <S.BarPlayerProgress
        type="range"
        min="0"
        max={duration}
        value={range}
        $range={(range / duration) * 100}
        step={0.01}
        onChange={(e) => handleClick(e)}
      ></S.BarPlayerProgress>
      <S.BarPlayerText>{`${countTrackTime(range)} / ${countTrackTime(
        duration
      )}`}</S.BarPlayerText>
    </>
  )
})

export default BarPlayerProgress
