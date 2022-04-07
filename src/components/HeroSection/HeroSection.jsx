import React from 'react'
import BackgroundSlider from 'react-background-slider'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Img1 from '../../images/pro4.webp'
import Img2 from '../../images/pro5.jpg'
import Img3 from '../../images/pro3.jpg'
import Img4 from '../../images/pro9.jpg'
import Button from '../Button/Button'
import './heroSection.css'

const image1 = Img1
const image2 = Img2
const image3 = Img3
const image4 = Img4

const Container = styled.div`
    /* background */
`
const Content = styled.div`
    display: flex;
    flex-direction: column;

`
const TopText = styled.h4`
    color: #fff;
    font-size: 22px;
    font-weight: 300;
    margin: 0;
    text-transform: uppercase;
    text-align: center;
`
const CenterTextContainer = styled.div`
    margin-bottom: 50px;
`
const CenterText = styled.h1`
    color: #fff;
    line-height: 40px;
    margin-top: 0;
    text-transform: uppercase;
    text-align: center;
`
const HeroButtonContainer = styled.div`
    align-self: center;
`
const HeroButton = styled.button`
    border: 2px solid;
    border-radius: 30px;
    box-sizing: border-box;
    color: #fff;
    display: inline-block;
    font-weight: 900;
    min-width: 125px;
    padding: 10px 25px;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    background-color: green;
    cursor: pointer;
`

const HeroSection = () => {
  return (
    <Container id='hero'>
        <BackgroundSlider
            images={[image1, image2, image3, image4]}
            duration={10} transition={2}
         />
        <Content>
            <TopText>
            loving radically, living generously
            </TopText>
            <CenterTextContainer>
                <CenterText>
                and watching jesus 
                </CenterText>
                <CenterText>
                do the extraordinary
                </CenterText>
            </CenterTextContainer>
            <HeroButtonContainer>
                <Link to="#">
               <Button BtnText='Connect with us' />
                </Link>
            </HeroButtonContainer>
        </Content>
    </Container>
  )
}

export default HeroSection