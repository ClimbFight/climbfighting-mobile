import React from 'react'
import styled from 'styled-components'
import cancelImage from './images/common-popup-cancel.png'

const Wrapper = styled.View`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 11px 0 48px 0;
    position: relative;
`

const TitleText = styled.Text`
    ${({theme}) => theme.fonts.ko_bold}
    font-size: ${({theme}) => theme.fontSizes.lg};
    font-style: normal;
    text-align: center;
    color: ${({theme}) => theme.colors['--grey-1']};
`

const CloseButton = styled.TouchableOpacity`
    padding: ${({theme}) => theme.paddings.xl};
    position: absolute;
    right: 0;
    bottom: ${({theme}) => `-${theme.verticalInterval.xl}`};
`

const CloseImage = styled.Image`
    width: 40px;
    height: 40px;
`

const LayerHeader = ({title, closeFn, closeBtn = true}) => {
    return (
        <Wrapper>
            <TitleText>{title}</TitleText>
            {closeBtn && (
                <CloseButton onPress={closeFn}>
                    <CloseImage source={cancelImage} />
                </CloseButton>
            )}
        </Wrapper>
    )
}

export default LayerHeader
