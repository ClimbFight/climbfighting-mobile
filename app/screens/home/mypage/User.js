import React from 'react'
import styled from 'styled-components'

import ProfileImage from '../images/profile.png'
import ProfileChangeBtn from '../images/profile-change-btn.png'

const UserContainer = styled.View`
    width: 100%;
    height: 266px;
    justify-content: center;
    align-items: center;
`

const UserProfile = styled.Image`
    width: 88px;
    height: 88px;
`
const UserName = styled.Text`
    font-size: 18px;
    color: ${({theme}) => theme.colors['--grey-1']};
`

const UserEmail = styled.Text`
    ${({theme}) => theme.fonts.ko_medium}
    font-size: 14px;
    color: ${({theme}) => theme.colors['--grey-3']};
    margin-top: 10px;
`

const UserChangeImg = styled.Image`
    width: 26px;
    height: 26px;
`

const UserNameContainer = styled.View`
    flex-direction: row;
    margin-top: 24px;
`

function User({name, email, image}) {
    return (
        <UserContainer>
            {image ? (
                <UserProfile source={image} />
            ) : (
                <UserProfile source={ProfileImage} />
            )}
            <UserNameContainer>
                <UserName>{name}</UserName>
                <UserChangeImg source={ProfileChangeBtn} />
            </UserNameContainer>
            <UserEmail>{email}</UserEmail>
        </UserContainer>
    )
}

export default User
