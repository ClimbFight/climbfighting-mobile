import React from 'react'
import styled from 'styled-components'

import Sunny from './images/weather-sunny-icon.png'
import Cloudy from './images/weather-cloudy-icon.png'
import Thunder from './images/weather-thunder-icon.png'
import Windy from './images/weather-windy-icon.png'
import Foggy from './images/weather-foggy-icon.png'
import Snowy from './images/weather-snowy-icon.png'

import Search from './images/search-btn.png'

const Container = styled.View`
    width: 100%;
`

const WeatherInfoContainer = styled.View`
    padding-top: 16px;
    padding-left: 24px;
    padding-bottom: 16px;
    flex-direction: row;
`

const WeatherImg = styled.Image`
    width: 40px;
    height: 40px;
    right: 8px;
`

const WeatherLocation = styled.Text`
    ${({theme}) => theme.fonts.ko_bold}
    font-size: 13px;
`

const WeatherInfoText = styled.Text`
    ${({theme}) => theme.fonts.ko_bold}
    font-size: 18px;
    justify-content: center;
    padding-top: 2px;
`

const WeatherFeedback = styled.Text`
    ${({theme}) => theme.fonts.ko_light}
    font-size: 14px;
    padding-left: 32px;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: ${({theme}) => theme.colors['--white-2']};
    justify-content: space-evenly;
`

const SearchBtn = styled.Image`
    position: absolute;
    width: 40px;
    height: 40px;
    right: 16px;
    top: 16px;
`

function WeatherLayout({location, weatherInfo, feedback, logo = Sunny}) {
    return (
        <Container>
            <WeatherInfoContainer>
                <WeatherImg source={logo} />
                <Container>
                    <WeatherLocation>{location}</WeatherLocation>
                    <WeatherInfoText>{weatherInfo}</WeatherInfoText>
                </Container>
                <SearchBtn source={Search} />
            </WeatherInfoContainer>
            <WeatherFeedback>{feedback}</WeatherFeedback>
        </Container>
    )
}

export default WeatherLayout
