import React from 'react'
import styled from 'styled-components'

import {createMaterialTopTabNavigator} from 'react-navigation-tabs'
import {createStackNavigator} from 'react-navigation-stack'

import User from './User'
import Write from '../Write'
import lightTheme from '../../../styles/light_theme'
import theme from '../../../styles/theme'

const Container = styled.View`
    width: 100%;
    flex-direction: column;
`
const SettingContainer = styled.View`
    flex-direction: row;
    justify-content: flex-end;
`

const SettingText = styled.Text`
    font-size: 18px;
    color: ${lightTheme.colors['--marine']};
    margin-top: 10px;
    margin-right: 19px;
`

const UserInfo = {
    name: '나는 등산쟁이',
    email: 'climbing259@naver.com',
    diaryCount: 0,
    climbCount: 0,
    badgeCount: 0,
    bookMarkCount: 0,
}

function MyPage() {
    return (
        <Container>
            <SettingContainer>
                <SettingText>설정</SettingText>
            </SettingContainer>
            <User name={UserInfo.name} email={UserInfo.email} />
        </Container>
    )
}

const MyPageTabNavigation = createMaterialTopTabNavigator(
    {
        /** 탭에 알맞는 페이지로 변경 */
        first: {
            screen: Write,
            navigationOptions: {
                tabBarLabel: `${UserInfo.diaryCount}\n등산일기`,
            },
        },
        second: {
            screen: Write,
            navigationOptions: {
                tabBarLabel: `${UserInfo.climbCount}\n다녀온 산`,
            },
        },
        third: {
            screen: Write,
            navigationOptions: {
                tabBarLabel: `${UserInfo.badgeCount}\n등산 배지`,
            },
        },
        fourth: {
            screen: Write,
            navigationOptions: {
                tabBarLabel: `${UserInfo.bookMarkCount}\n북마크`,
            },
        },
    },
    {
        tabBarOptions: {
            style: {
                elevation: 0,
                shadowOpacity: 0,
                backgroundColor: 'transparent',
            },
            labelStyle: {
                fontWeight: `${theme.fontWeight.bold}`,
                fontSize: 14,
            },
            activeTintColor: `${lightTheme.colors['--grey-1']}`,
            inactiveTintColor: `${lightTheme.colors['--grey-4']}`,
            indicatorStyle: {
                backgroundColor: `${lightTheme.colors['--pale-marine']}`,
                height: 8,
                width: 70,
                marginLeft: 14,
                marginRight: 14,
            },
        },
    },
)

const MyPageNavigation = createStackNavigator(
    {
        myPageNavigation: {
            screen: MyPageTabNavigation,
            navigationOptions: {
                header: () => <MyPage />,
            },
        },
    },
    {
        initialRouteName: 'myPageNavigation',
    },
)

export default MyPageNavigation
