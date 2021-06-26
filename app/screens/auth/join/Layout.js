import React from 'react'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import styled from 'styled-components'
import DismissKeyboardView from './DismissKeyboardView'

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

const Layout = ({title, subtitle, children}) => {
    return (
        <KeyboardAwareScrollView behavior="padding" enabled>
            <DismissKeyboardView style={{height: '100%'}}>
                <Wrapper>
                    <TitleBox>
                        <Title>{title}</Title>
                        <SubTitle>{subtitle}</SubTitle>
                    </TitleBox>
                    {children}
                </Wrapper>
            </DismissKeyboardView>
        </KeyboardAwareScrollView>
    )
}

export default Layout
