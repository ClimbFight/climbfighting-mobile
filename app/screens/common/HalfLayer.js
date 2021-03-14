import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.View`
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
`

const ContentBox = styled.View`
    width: 100%;
    padding: 16px 14px 32px 32px;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    background-color: #ffffff;
`

const Cover = styled.TouchableOpacity`
    flex: 1;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(50, 50, 50, 0.5);
`

const HalfLayer = ({isShow, closeFn, children}) => {
    if (!isShow) {
        return null
    }

    return (
        <>
            <Wrapper>
                <ContentBox>{children}</ContentBox>
            </Wrapper>
            <Cover activeOpacity={1} onPress={closeFn} />
        </>
    )
}

export default HalfLayer
