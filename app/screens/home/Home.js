import React from 'react'
import {ScrollView, View} from 'react-native'
import WeatherLayout from './WeatherLayer'
import DiaryItem from './DiaryItem'

const diaryItems = [
    {
        id: 1,
        thumbnail: 'https://reactnative.dev/img/tiny_logo.png',
        name: '단청이 누나',
        time: '방금 전',
        content:
            '제목이 입력됩니다. 최대 두 줄로 입력합니다. 만약 더 길어진다면 이런식으로 말 줄임표를 사용하여 표현…',
        isMarked: true,
        images: [
            'https://newsimg.hankookilbo.com/cms/articlerelease/2019/04/29/201904291390027161_3.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8uyx3Z85xVn1ie0BCR3aY9U2gs4BbK1kAXg&usqp=CAU',
        ],
        location: '경상남도 백범산',
    },
    {
        id: 2,
        thumbnail: 'https://reactnative.dev/img/tiny_logo.png',
        name: '달려라 고양이',
        time: '어제',
        content: '고양이맛 쿠키도 나오나요??',
        isMarked: false,
        images: [
            'https://i.pinimg.com/736x/68/94/93/6894931eb3e93f6d6ef2dd000d8acdc6.jpg',
        ],
        location: null,
    },
]

const DiaryList = () => {
    return diaryItems.map((item) => (
        <DiaryItem
            name={item.name}
            thumbnail={item.thumbnail}
            time={item.time}
            content={item.content}
            marked={item.isMarked}
            images={item.images}
            location={item.location}
        />
    ))
}

const Home = () => (
    <ScrollView>
        <WeatherLayout
            location="경기도 수원시"
            weatherInfo="맑음 -2°"
            feedback="등산하기 좋은 날씨네요!"
        />
        <DiaryList />
    </ScrollView>
)

export default Home
