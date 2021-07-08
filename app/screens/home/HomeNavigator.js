import React from 'react'
import {Image} from 'react-native'
import {createBottomTabNavigator} from 'react-navigation-tabs'

import Home from './main/Home'
import Write from './Write'
import MyPage from './mypage/MyPage'

import HomeBtn from './images/home-btn.png'
import HomeBtnActive from './images/home-btn-active.png'
import WriteBtn from './images/write-btn.png'
import WriteBtnActive from './images/write-btn-active.png'
import mypageBtn from './images/mypage-btn.png'
import mypageBtnActive from './images/mypage-btn-active.png'

const Diary = createBottomTabNavigator(
    {
        home: {
            screen: Home,
        },
        write: {
            screen: Write,
        },
        mypage: {
            screen: MyPage,
        },
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            tabBarIcon: ({focused, horizontal, tintIcon}) => {
                const {routeName} = navigation.state

                let imgSrc
                if (routeName === 'home') {
                    imgSrc = focused ? HomeBtnActive : HomeBtn
                } else if (routeName === 'write') {
                    imgSrc = focused ? WriteBtnActive : WriteBtn
                } else {
                    imgSrc = focused ? mypageBtnActive : mypageBtn
                }

                return <Image source={imgSrc} />
            },
        }),

        tabBarOptions: {
            showLabel: false,
        },
    },
)

export default Diary
