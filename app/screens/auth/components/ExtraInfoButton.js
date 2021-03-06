import React from 'react'
import styled from 'styled-components'
import {colorTheme, globalFont} from '../../../styles/variables'

const ExtraInfoButtonBox = styled.TouchableOpacity`
    width: 50%;
    align-items: center;
`

const ExtraInfoText = styled.Text`
    ${globalFont.ko_light}
    font-size: 12px;
    font-style: normal;
    text-align: center;
    color: ${colorTheme['--grey-1']};
    margin-top: 24px;
`

const ExtraInfoButton = ({to, text, navigation}) => {
    return (
        <ExtraInfoButtonBox onPress={() => navigation.navigate('extraInfo')}>
            <ExtraInfoText>{text}</ExtraInfoText>
        </ExtraInfoButtonBox>
    )
}

export default ExtraInfoButton
