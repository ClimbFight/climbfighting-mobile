import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import FooterButton from '$screens/auth/components/FooterButton'
import bdImg from './images/start_img.jpg'
import LoginButtonLayer from './LoginButtonLayer'

const Container = styled.View`
    flex: 1;
`

const Cover = styled.ImageBackground`
    flex: 1;
    resize-mode: cover;
    justify-content: flex-end;
    align-items: flex-start;
`

const TextBox = styled.View`
    margin: ${({theme}) => `0 ${theme.margins.xxxxl}`};
`

const TitleText = styled.Text`
    ${({theme}) => theme.fonts.ko_light}
    font-size: ${({theme}) => theme.fontSizes.xxxl};
    font-style: normal;
    color: ${({theme}) => theme.colors['--white']};
`

const SubTitleText = styled.Text`
    ${({theme}) => theme.fonts.ko_light}
    margin: 21px 0 50px;
    font-size: ${({theme}) => theme.fontSizes.lg};
    width: 100%;
    font-style: normal;
    color: ${({theme}) => theme.colors['--white']};
}`

const Login = ({navigation}) => {
    const [isShow, setIsShow] = useState(false)

    const openLoginLayer = () => setIsShow(!isShow)

    const closeFn = () => setIsShow(false)

    useEffect(() => {
        const willBlurSubscription = navigation.addListener('willBlur', () => {
            closeFn()
        })
        return () => willBlurSubscription.remove()
    }, [])

    return (
        <Container>
            <Cover source={bdImg}>
                <TextBox>
                    <TitleText>내 산의 기록</TitleText>
                    <SubTitleText>
                        싱그러운 풀내음, 바스락거리는 나뭇잎,
                        {'\n'}
                        내가 다녀간 산의 모습을 기록해보세요.
                    </SubTitleText>
                </TextBox>
                <FooterButton text="시작하기" onPress={openLoginLayer} />
                <LoginButtonLayer
                    isShow={isShow}
                    navigation={navigation}
                    closeFn={closeFn}
                />
            </Cover>
        </Container>
    )
}

export default Login
