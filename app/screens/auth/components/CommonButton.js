import React from 'react'
import styled from 'styled-components'

const ButtonBox = styled.View`
    margin: ${({theme}) => `0 ${theme.margins.xxxxl} ${theme.margins.xxxxl}`};
    align-self: stretch;
`

const Button = styled.TouchableOpacity`
    padding: 18px 103px;
    border-radius: 27px;
    text-align: center;
    background-color: ${({theme}) => theme.colors['--marine']};
`

const ButtonText = styled.Text`
    ${({theme}) => theme.fonts.ko_bold}
    font-size: ${({theme}) => theme.fontSizes.lg};
    font-style: normal;
    text-align: center;
    color: ${({theme}) => theme.colors['--white']};
`

const CommonButton = ({text, onPress, activeOpacity = 0.9}) => {
    return (
        <ButtonBox>
            <Button activeOpacity={activeOpacity} onPress={onPress}>
                <ButtonText>{text}</ButtonText>
            </Button>
        </ButtonBox>
    )
}

export default CommonButton
