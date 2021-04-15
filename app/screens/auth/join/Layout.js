import React from 'react'
import styled from 'styled-components'
import FooterButton from '../components/FooterButton'
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
const Footer = styled.View`
    display: flex;
    align-items: flex-end;
    position: absolute;
    bottom: 0;
    width: 100%;
`

const noop = () => {}

const Layout = ({title, subtitle, children, buttonConfig = {}}) => {
    const {text = '다음', onPress = noop, disabled = true} = buttonConfig

    return (
        <DismissKeyboardView style={{height: '100%'}}>
            <Wrapper>
                <TitleBox>
                    <Title>{title}</Title>
                    <SubTitle>{subtitle}</SubTitle>
                </TitleBox>
                {children}
            </Wrapper>
            <Footer>
                <FooterButton
                    disabled={disabled}
                    text={text}
                    onPress={onPress}
                />
            </Footer>
        </DismissKeyboardView>
    )
}

export default Layout
