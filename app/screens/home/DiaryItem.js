import React from 'react'
import styled from 'styled-components'

import ActiveMark from './images/bookmark-active.png'
import InactiveMark from './images/bookmark-inactive.png'
import LocationIcon from './images/location-icon.png'

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

const ImageContainer = styled.ImageBackground`
    width: 100%;
    height: 175px;
    margin-top: 16px;
    margin-bottom: 30px;
`

const ImageInfo = styled.Text`          
    align-self: flex-end;
    opacity: 0.6;
    width: 35px;
    padding: 8px;
    color: ${({theme}) => theme.colors['--white-1']}
    background: ${({theme}) => theme.colors['--grey-1']};
    border-radius: 8px;
    margin-top: 9px;
    margin-end: 9px;
`
const LocationInfoContainer = styled.View`
    position: absolute;
    bottom: 9px;
    flex-direction: row;
    height: 36px;
    width: 30%;
    opacity: 0.6;
    background: ${({theme}) => theme.colors['--grey-1']};
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
`

const LocationImg = styled.Image`
    width: 8px;
    height: 11px;
`

const LocationInfo = styled.Text`
    ${({theme}) => theme.fonts.ko_bold}
    color: ${({theme}) => theme.colors['--white-1']}
    font-size: 11px;
    margin-left: 1px;
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
            <ImageContainer
                source={{uri: images[0]}}
                imageStyle={{borderRadius: 20}}>
                {images.length > 1 ? (
                    <ImageInfo>+{images.length - 1}</ImageInfo>
                ) : null}

                {location != null ? (
                    <LocationInfoContainer>
                        <LocationImg source={LocationIcon} />
                        <LocationInfo>{location}</LocationInfo>
                    </LocationInfoContainer>
                ) : null}
            </ImageContainer>
        </Container>
    )
}

export default DiaryItem
