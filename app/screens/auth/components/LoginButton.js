import React from 'react'
import styled from 'styled-components'
import {colorTheme, globalFont} from '../../../styles/variables'
import googleLogo from '../images/google-icon.png'

const LoginButtonBox = styled.TouchableOpacity`
    width: 80%;
    height: 54px;
    align-items: center;
    justify-content: center;
    margin: 10px;
    padding: 8px;
    border-radius: 27px;
    background-color: ${colorTheme['--white-1']};
    position: relative;
`

const LoginLogo = styled.Image`
    width: 38px;
    height: 38px;
    position: absolute;
    left: 8px;
`

const LoginText = styled.Text`
    ${globalFont.ko_bold}
    font-size: 15px;
    color: ${colorTheme['--grey-1']};
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
