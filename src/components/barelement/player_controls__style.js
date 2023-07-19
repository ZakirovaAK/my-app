import styled , { css } from 'styled-components'

const MainTextMixin = css`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: ${(props) => props.theme.supportiveColor};
`

export const PlayerControls = styled.div`
  width: 250px;
  display: flex;
  padding: 0px 27px 0px 31px;
  justify-content: space-between;
  align-content: center;
  align-items: center;
`

export const PlayerBtn = styled.div`
  padding: 5px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`

// Новый компонент на основе PlayerBtn, но с новыми стилями
export const PlayerBtnPrev = styled(PlayerBtn)`
  margin-right: 23px;
`

export const PlayerBtnPrevSvg = styled.svg`
  width: 15px;
  height: 14px;
`

export const PlayerBtnPlay = styled(PlayerBtn)`
  margin-right: 23px;
`

export const PlayerBtnPlaySvg = styled.svg`
  width: 22px;
  height: 20px;
  fill: #d9d9d9;
`

export const PlayerBtnNext = styled(PlayerBtn)`
  margin-right: 28px;
  fill: #a53939;
`

export const PlayerBtnNextSvg = styled.svg`
  width: 15px;
  height: 14px;
  fill: inherit;
  stroke: #d9d9d9;
`

export const PlayerBtnRepeat = styled(PlayerBtn)`
  margin-right: 24px;
`

export const PlayerBtnRepeatSvg = styled.svg`
  width: 18px;
  height: 12px;
  fill: transparent;
  stroke: #696969;

  ${'' /* margin-right: 24px;
  cursor: pointer;

  :hover {
    stroke: #cccccc;
  }

  :active {
    stroke: #ffffff;
  } */}
`

export const PlayerBtnShuffle = styled(PlayerBtn)`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
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

export const PlayerBtnShuffleSvg = styled.svg`
  width: 19px;
  height: 12px;
  fill: transparent;
  stroke: #696969;

  ${'' /* margin-right: 24px;
  cursor: pointer;

  :hover {
    stroke: #cccccc;
  }

  :active {
    stroke: #ffffff;
  } */}
`

export const PlayerBtnSvg = styled.svg`
    ${'' /* ${HoverMixin} */}
    width: 15px;
    height: 14px;
    stroke: ${SvgLight};
`

export const BarPlayerText = styled.p`
    ${MainTextMixin}
    color: #696969;
    line-height: 16px;
    text-align: end;
    padding-top: 10px;
    padding-right: 10px;
`
export const BarPlayerProgress = styled.input`
    height: 5px;
    width: 100%;
    background: #797979;
    background: ${(props) => props.theme.barProgressColor};
    background-image: linear-gradient(#b672ff, #b672ff);
    background-size: ${(props) => props.$range}% 100%;
    background-repeat: no-repeat;
    border-radius: 5px;
    -webkit-appearance: none;
    outline: none;
    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: #b672ff;
        cursor: pointer;
    }
    &::-moz-range-thumb {
        -webkit-appearance: none;
        height: 10px;
        width: 10px;
        border-radius: 50%;
        background: #b672ff;
        transition: background 0.3s ease-in-out;
    }
    ::-moz-range-thumb {
        -webkit-appearance: none;
        height: 20px;
        width: 20px;
        border-radius: 50%;
        background: #ff4500;
        cursor: ew-resize;
        box-shadow: 0 0 2px 0 #555;
        transition: background 0.3s ease-in-out;
    }
    ::-ms-thumb {
        -webkit-appearance: none;
        height: 20px;
        width: 20px;
        border-radius: 50%;
        background: #ff4500;
        cursor: ew-resize;
        box-shadow: 0 0 2px 0 #555;
        transition: background 0.3s ease-in-out;
    }
`