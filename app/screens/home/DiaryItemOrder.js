import React from 'react'
import styled from 'styled-components'

import ActiveMark from './images/bookmark-active.png'
import InactiveMark from './images/bookmark-inactive.png'
import LocationIcon from './images/location-icon.png'

const Container = styled.View`
    width: 100%;
    height: 40px;
    padding-top: 24px;
    padding-left: 24px;
    padding-right: 24px;
    justify-content: flex-end;
    flex-direction: row;
`
const ActiveOrderText = styled.Text`
    ${({theme}) => theme.fonts.ko_medium}
    font-size: 13px;
    color: ${({theme}) => theme.colors['--grey-1']}
    margin-right: 12px;
`

const DeactivateOrderText = styled.Text`
    ${({theme}) => theme.fonts.ko_medium}
    font-size: 13px;
    color: ${({theme}) => theme.colors['--grey-4']}
    margin-right: 12px;
`

function DiaryItemOrder({isRecent}) {
    return {isRecent} ? (
        <Container>
            <ActiveOrderText>최신순</ActiveOrderText>
            <ActiveOrderText>|</ActiveOrderText>
            <DeactivateOrderText>인기순</DeactivateOrderText>
        </Container>
    ) : (
        <Container>
            <DeactivateOrderText>최신순</DeactivateOrderText>
            <ActiveOrderText>|</ActiveOrderText>
            <ActiveOrderText>인기순</ActiveOrderText>
        </Container>
    )
}

export default DiaryItemOrder
