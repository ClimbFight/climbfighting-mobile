
import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator, BottomTabBar } from "react-navigation-tabs";

import Home from './Home';
import Search from './Search';
import Write from './Write';
import Alaram from './Alaram';
import MyPage from './MyPage';
import { createAppContainer } from 'react-navigation';

const Diary = createBottomTabNavigator({
        home: {
            screen: Home
        },
        search: {
            screen: Search
        },
        write: {
            screen: Write
        },
        alaram: {
            screen: Alaram
        },
        mypage: {
            screen: MyPage
        }
    
    });

export default Diary;
