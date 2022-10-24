import React from 'react'
import { keyframes } from 'styled-components'
import styled from 'styled-components'

export default function TextAnimation() {
    return(
        <Wrapper>This app gives the latest news according to your choice, just try saying the commands given below!</Wrapper>
    )
}

const animation = keyframes`
   0% { opacity: 0; transform: translateY(-100px);}
   25% { opacity: 1; transform: translateY(0px);}
   75% { opacity: 1; transform: translateY(0px);}
   100% { opacity: 1; transform: translateY(-100px);}
`


const Wrapper = styled.span`
  display: inline-block;
  opacity: 0;
  animation-name: ${animation};
  animation-duration: 5s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;

`
