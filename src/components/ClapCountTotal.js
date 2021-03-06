import styled, {css} from 'styled-components'
import {textStyles} from '../utils'

const ClapCountTotal = styled.span`
  text-align: center;
  left: 0;
  ${textStyles}

  ${({theme: {primaryColor, size}}) => css`
    top: -${size / 3.5}px;
    color: ${primaryColor};
    width: ${size}px;
  `}
`

export default ClapCountTotal
