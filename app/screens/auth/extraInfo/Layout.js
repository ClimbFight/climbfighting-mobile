import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.View`
    margin: 72px 32px 0;
`

const Title = styled.View`
    font-style: normal;
    ${({theme}) => theme.fonts.ko_light}
    font-size: ${({theme}) => theme.fontSizes.xxl};
    color: ${({theme}) => theme.colors['--grey-1']};
`

const Layout = () => {
    return (
        <Wrapper>
            <Title>
                반가워요!
                <br />
                이메일을 알려주세요.
            </Title>
        </Wrapper>
    )
}

export default Layout
