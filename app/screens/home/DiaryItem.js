import React from 'react'
import styled from 'styled-components'

import ActiveMark from './images/bookmark-active.png'
import InactiveMark from './images/bookmark-inactive.png'

const Container = styled.ScrollView`
    width: 100%;
    height: 340px;
    padding-top: 24px;
    padding-left: 24px;
    padding-right: 24px;
`
const UserContainer = styled.View`
    flex-direction: row;
    width: 100%;
`

const TextContainer = styled.View`
    flex-direction: column;
    flex: 2;
    left: 8px;
`

const BookMark = styled.Image`
    width: 36px;
    height: 36px;
`

const DiaryUserName = styled.Text`
    ${({theme}) => theme.fonts.ko_bold}
    font-size: 13px;
    color: ${({theme}) => theme.colors['--grey-1']};
`

const DiaryTime = styled.Text`
    ${({theme}) => theme.fonts.ko_light}
    font-size: 11px;
    color: ${({theme}) => theme.colors['--grey-3']};
    top: 4px;
`

const UserThumbnail = styled.Image`
    width: 38px;
    height: 38px;
    border-radius: 40px;
`

const DiaryContent = styled.Text`
    ${({theme}) => theme.fonts.ko_light}
    flex: 2;
    font-size: 14px;
    margin-top: 16px;
`

const ImageContainer = styled.View`
    width: 100%;
    margin-top: 16px;
    margin-bottom: 30px;
`

const ImageContent = styled.Image`
    width: 100%;
    height: 175px;
    border-radius: 20px;
`

const OpacityRectangle = styled.Text`      
    opacity: 0.6;
    width: 35px;
    padding: 8px;
    color: ${({theme}) => theme.colors['--white-1']}
    background: ${({theme}) => theme.colors['--grey-1']};
    border-radius: 8px;
`

function DiaryItem({thumbnail, name, time, content, marked, images, location}) {
    return (
        <Container>
            <UserContainer>
                <UserThumbnail source={{uri: thumbnail}} />
                <TextContainer>
                    <DiaryUserName>{name}</DiaryUserName>
                    <DiaryTime>{time}</DiaryTime>
                </TextContainer>
                <BookMark source={marked ? ActiveMark : InactiveMark} />
            </UserContainer>
            <DiaryContent>{content}</DiaryContent>
            <ImageContainer>
                {images.length > 1 ? (
                    <OpacityRectangle>+{images.length - 1}</OpacityRectangle>
                ) : null}
                <ImageContent source={{uri: images[0]}} />
            </ImageContainer>
        </Container>
    )
}

export default DiaryItem
