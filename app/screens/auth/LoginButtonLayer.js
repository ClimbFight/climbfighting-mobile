import React from 'react'
import styled from 'styled-components'
import HalfLayer from '../common/HalfLayer'
import LayerHeader from '../common/layer/LayerHeader'
import LoginButton from './components/LoginButton'

import googleLogo from './images/google-icon.png'
import naverLogo from './images/naver-icon.png'
import emailIcon from './images/email-icon.png'
import ExtraInfoButton from './components/ExtraInfoButton'

const LoginContainer = styled.View`
    align-items: center;
    margin-bottom: ${({theme}) => `${theme.margins.xxxxl}`};
`

const LoginHelpContainer = styled.View`
    flex: 1;
    flex-direction: row;
`

const LoginButtonLayer = ({isShow, closeFn, navigation}) => {
    return (
        <HalfLayer isShow={isShow} closeFn={closeFn}>
            <LayerHeader title="등산화이팅 시작하기" closeFn={closeFn} />
            <LoginContainer>
                <LoginButton
                    text="Google 로그인"
                    logo={googleLogo}
                    navigation={navigation}
                />
                <LoginButton
                    text="네이버 로그인"
                    logo={naverLogo}
                    navigation={navigation}
                />
                <LoginButton
                    text="이메일 로그인"
                    logo={emailIcon}
                    navigation={navigation}
                />

                <LoginHelpContainer>
                    <ExtraInfoButton
                        to="joinEmail"
                        text="이메일 회원가입"
                        navigation={navigation}
                    />
                    <ExtraInfoButton
                        to="agreement"
                        text="ID/PW 찾기"
                        navigation={navigation}
                    />
                </LoginHelpContainer>
            </LoginContainer>
        </HalfLayer>
    )
}

export default LoginButtonLayer
