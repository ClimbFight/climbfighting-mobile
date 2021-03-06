import React from 'react'
import {View, Text} from 'react-native'
import styled from 'styled-components'

const Container = styled.View`
    flex: 1;
`

const LoginContainer = styled.View`
    align-items: center;
    margin-bottom: 50px;
`

const LoginButton = styled.TouchableOpacity`
    width: 80%;
    height: 15%;
    border-width: 1;
    border-color: black;
    align-items: center;
    justify-content: center;
    margin: 10px;
`

const ExtraInfoButton = styled.TouchableOpacity`
    width: 50%;
    align-items: center;
`

const LoginHelpContainer = styled.View`
    flex: 1;
    flex-direction: row;
`

const Login = ({navigation}) => (
    <Container>
        <View style={{height: '50%'}} />
        <LoginContainer>
            <LoginButton>
                <Text>Google 로그인</Text>
            </LoginButton>

            <LoginButton>
                <Text>네이버 로그인</Text>
            </LoginButton>

            <LoginButton>
                <Text>이메일 로그인</Text>
            </LoginButton>

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
    </Container>
)

export default Login
