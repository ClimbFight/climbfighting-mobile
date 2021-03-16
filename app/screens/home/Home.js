import React from 'react'
import {View, Text} from 'react-native'
import WeatherLayout from './WeatherLayer'

const Home = () => (
    <View>
        <WeatherLayout
            location="경기도 수원시"
            weatherInfo="맑음 -2°"
            feedback="등산하기 좋은 날씨네요!"
        />
    </View>
)

export default Home
