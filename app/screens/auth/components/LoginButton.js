import React from 'react'
import styled from 'styled-components'
import googleLogo from '../images/google-icon.png'

const LoginButtonBox = styled.TouchableOpacity`
    width: 80%;
    height: 54px;
    align-items: center;
    justify-content: center;
    margin: 10px;
    padding: ${({theme}) => theme.paddings.small};
    border-radius: 27px;
    background-color: ${({theme}) => theme.colors['--white-1']};
    position: relative;
`

const LoginLogo = styled.Image`
    width: 38px;
    height: 38px;
    position: absolute;
    left: ${({theme}) => theme.interval.small};
`

const LoginText = styled.Text`
    ${({theme}) => theme.fonts.ko_bold}
    font-size: 15px;
    color: ${({theme}) => theme.colors['--grey-1']};
`

const LoginButton = ({text, logo = googleLogo}) => {
    return (
        <LoginButtonBox activeOpacity={1}>
            <LoginLogo source={logo} />
            <LoginText>{text}</LoginText>
        </LoginButtonBox>
    )
}

export default LoginButton
