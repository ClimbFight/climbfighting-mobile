import React, {useState} from 'react'
import styled from 'styled-components'
import DismissKeyboardView from './DismissKeyboard'

const Wrapper = styled.View`
    padding: 96px 32px 0;
    display: flex;
    justify-content: center;
    align-items: center;
`

const TitleBox = styled.View`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
`

const Title = styled.Text`
    font-style: normal;
    ${({theme}) => theme.fonts.ko_light}
    font-size: ${({theme}) => theme.fontSizes.xxl};
    color: ${({theme}) => theme.colors['--grey-1']};
`

const SubTitle = styled.Text`
    ${({theme}) => theme.fonts.ko_light}
    font-size: ${({theme}) => theme.fontSizes.small};
    font-style: normal;
    color: ${({theme}) => theme.colors['--grey-3']};
    padding: 8px;
`

const Input = styled.TextInput`
    width: 100%;
    border-bottom-color: ${({theme}) => theme.colors['--grey-4']};
    border-bottom-width: 1px;
    margin-top: 97px;
`

const Layout = () => {
    const [email, setEmail] = useState('')

    return (
        <DismissKeyboardView style={{height: '100%'}}>
            <Wrapper>
                <TitleBox>
                    <Title>
                        반가워요!
                        {'\n'}
                        이메일을 알려주세요.
                    </Title>
                    <SubTitle>
                        이메일 주소는 다른 사용자에게 공개되지 않아요.
                    </SubTitle>
                </TitleBox>
                <Input
                    onChangeText={(value) => setEmail(value)}
                    value={email}
                />
            </Wrapper>
        </DismissKeyboardView>
    )
}

export default Layout
