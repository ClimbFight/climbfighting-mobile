import React from 'react'
import {Text} from 'react-native'
import styled from 'styled-components'
import HalfLayer from '../common/HalfLayer'
import LayerHeader from '../common/layer/LayerHeader'
import LoginButton from './components/LoginButton'

import googleLogo from './images/google-icon.png'
import naverLogo from './images/naver-icon.png'
import emailIcon from './images/email-icon.png'

const LoginContainer = styled.View`
    align-items: center;
    margin-bottom: 50px;
`

const ExtraInfoButton = styled.TouchableOpacity`
    width: 50%;
    align-items: center;
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
                <LoginButton text="Google 로그인" logo={googleLogo} />
                <LoginButton text="네이버 로그인" logo={naverLogo} />
                <LoginButton text="이메일 로그인" logo={emailIcon} />

                <LoginHelpContainer>
                    <ExtraInfoButton
                        onPress={() => navigation.navigate('extraInfo')}>
                        <Text>이메일 회원가입</Text>
                    </ExtraInfoButton>

                    <ExtraInfoButton>
                        <Text>ID/PW 찾기</Text>
                    </ExtraInfoButton>
                </LoginHelpContainer>
            </LoginContainer>
        </HalfLayer>
    )
}

export default LoginButtonLayer
