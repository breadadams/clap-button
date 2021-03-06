import React from 'react'
import styled, {css} from 'styled-components'
import {storiesOf} from '@storybook/react'
import {ThumbsUp} from 'react-feather'

import centered from '@storybook/addon-centered'

import ClapButton from '../src'

const CustomIcon = styled(ThumbsUp)`
  stroke: ${({ theme: { secondaryColor } }) => secondaryColor};
  stroke-width: 1px;
  fill: none;
  ${props => props.isClicked && css`
      fill: ${({ theme: { secondaryColor } }) => secondaryColor};
      stroke: white;
    `};
`

storiesOf('ClapButton', module)
  .addDecorator(centered)
  .addWithJSX('default', () => <ClapButton />)
  .addWithJSX('maxCount', () => <ClapButton maxCount={3} countTotal={100} />)
  .addWithJSX('icon', () => (
    <ClapButton
      iconComponent={props => <CustomIcon {...props} size={38} />}
    />
  ))
  .addWithJSX('color', () => (
    <ClapButton
      theme={{ primaryColor: '#5f27ae', secondaryColor: '#5f27ae' }}
    />
  ))
