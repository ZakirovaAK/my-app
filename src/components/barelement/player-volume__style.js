import styled, { css } from 'styled-components'

const HoverMixin = css`
  :hover,
  :hover svg {
    fill: transparent;
    stroke: #acacac;
    cursor: pointer;
  }
`

export const BarVolumeBlock = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  padding: 0 92px 0 0;
`

export const VolumeContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
`

export const VolumeImage = styled.div`
  width: 13px;
  height: 18px;
  margin-right: 17px;
`

const SvgLight = css`
    fill: transparent;
    stroke: #696969;
    stroke: ${(props) => props.theme.svgLightColor};
`

export const ToggleThemeSvg = styled.svg`
  ${SvgLight}
  width: 39px;
  height: 39px;
`

export const VolumeSVG = styled.svg`
  width: 13px;
  height: 18px;
  fill: transparent;
  stroke: ${SvgLight};
`

export const VolumeProgress = styled.div`
  width: 109px;
`

export const VolumeProgressLine = styled.input`
  ${HoverMixin}
  width: 109px;
  height: 2px;
  margin-bottom: 12px;
  -webkit-appearance: none;
  ${'' /* background: #797979; */}
  ${'' /* background-image: linear-gradient(#ffffff, #ffffff); */}
  background: ${(props) => props.theme.volumeProgressColor.background};
  background-image: linear-gradient(
    ${(props) => props.theme.volumeProgressColor.thumb},
    ${(props) => props.theme.volumeProgressColor.thumb}
  );
  background-size: ${(props) => props.$range}% 100%;
  background-repeat: no-repeat;

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 12px;
    width: 12px;
    border-radius: 50%;
    ${'' /* background: #ffffff; */}
    background: ${(props) => props.theme.volumeProgressColor.thumb};
    transition: background 0.3s ease-in-out;
  }

  ::-moz-range-thumb {
    -webkit-appearance: none;
    height: 12px;
    width: 12px;
    border-radius: 50%;
    ${'' /* background: #ffffff; */}
    background: ${(props) => props.theme.volumeProgressColor.thumb};
    transition: background 0.3s ease-in-out;
  }

  ::-ms-thumb {
    -webkit-appearance: none;
    height: 12px;
    width: 12px;
    border-radius: 50%;
    ${'' /* background: #ffffff; */}
    background: ${(props) => props.theme.volumeProgressColor.thumb};
    transition: background 0.3s ease-in-out;
  }

  ::-webkit-slider-thumb:hover {
    background: ${(props) => props.theme.volumeProgressColor.thumb};
  }

  ::-moz-range-thumb:hover {
    background: ${(props) => props.theme.volumeProgressColor.thumb};
  }

  ::-ms-thumb:hover {
    background: ${(props) => props.theme.volumeProgressColor.thumb};
  }

  ::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    box-shadow: none;
    border: none;
    background: transparent;
  }

  ::-moz-range-track {
    -webkit-appearance: none;
    box-shadow: none;
    border: none;
    background: transparent;
  }

  ::-ms-track {
    -webkit-appearance: none;
    box-shadow: none;
    border: none;
    background: transparent;
  }
`
