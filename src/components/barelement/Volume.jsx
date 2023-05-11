import { useState } from 'react'
import * as StyledVol from './player-volume__style'

import volume from '../../img/icon/volume.svg'

function Volume() {
  const [value, setValue] = useState(70)
  function handleInputChange(e) {
    setValue(e.target.value)
  }

  return (
    <StyledVol.BarVolumeBlock>
      <StyledVol.VolumeContent>
        <StyledVol.VolumeImage>
          <StyledVol.VolumeSVG ariaLabel="volume">
            <image href={volume} />
          </StyledVol.VolumeSVG>
        </StyledVol.VolumeImage>
        <StyledVol.VolumeProgress>
          <StyledVol.VolumeProgressLine
            type="range"
            name="range"
            value={value}
            $range={value}
            min="0"
            onInput={(e) => handleInputChange(e)}
          />
        </StyledVol.VolumeProgress>
      </StyledVol.VolumeContent>
    </StyledVol.BarVolumeBlock>
  )
}
export default Volume
