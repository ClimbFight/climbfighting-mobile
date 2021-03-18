import React from 'react'
import styled from 'styled-components'

const ExtraInfoButtonBox = styled.TouchableOpacity`
    width: 50%;
    align-items: center;
`

const ExtraInfoText = styled.Text`
    ${({theme}) => theme.fonts.ko_light}
    font-size: 12px;
    font-style: normal;
    text-align: center;
    color: ${({theme}) => theme.colors['--grey-1']};
    margin-top: ${({theme}) => `${theme.margins.xxxl}`};
`

const ExtraInfoButton = ({to, text, navigation}) => {
    return (
        <ExtraInfoButtonBox onPress={() => navigation.navigate(to)}>
            <ExtraInfoText>{text}</ExtraInfoText>
        </ExtraInfoButtonBox>
    )
}

export default ExtraInfoButton
