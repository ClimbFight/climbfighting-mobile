import React from 'react'
import styled from 'styled-components'
import {colorTheme, globalFont} from '../../../styles/variables'
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
    ${globalFont.ko_bold}
    font-size: 16px;
    font-style: normal;
    text-align: center;
    color: ${colorTheme['--grey-1']};
`

const CloseButton = styled.TouchableOpacity`
    padding: 14px;
    position: absolute;
    right: 0;
    bottom: -20px;
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
