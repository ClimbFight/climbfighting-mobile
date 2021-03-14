import React from 'react'
import styled from 'styled-components'
import cancelImage from './images/common-popup-cancel.png'

const HeaderBox = styled.View`
    width: 100%;
    height: 42px;
    margin-top: 14px;
    margin-bottom: 23px;
    display: flex;
    justify-content: center;
    align-items: center;
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
    right: 0px;
`

const CloseImage = styled.Image`
    width: 40px;
    height: 40px;
`

const LayerHeader = ({title, closeFn, closeBtn = true}) => {
    return (
        <HeaderBox>
            <TitleText>{title}</TitleText>
            {closeBtn && (
                <CloseButton onPress={closeFn}>
                    <CloseImage source={cancelImage} />
                </CloseButton>
            )}
        </HeaderBox>
    )
}

export default LayerHeader
