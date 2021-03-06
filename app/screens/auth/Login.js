import React, {useState} from 'react'
import styled from 'styled-components'
import {globalFont, colorTheme} from '../../styles/variables'
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
    margin: 0 32px;
`

const TitleText = styled.Text`
    ${globalFont.ko_light}
    font-size: 32px;
    font-style: normal;
    color: #ffffff;
`

const SubTitleText = styled.Text`
    ${globalFont.ko_light}
    margin: 21px 0 50px;
    font-size: 16px;
    width: 100%;
    font-style: normal;
    color: #ffffff;
}`

const LoginButtonBox = styled.View`
    margin: 0 32px 32px;
    align-self: stretch;
`

const LoginButton = styled.TouchableOpacity`
    padding: 18px 103px;
    border-radius: 27px;
    text-align: center;
    background-color: ${colorTheme['--marine']};
`

const LoginButtonText = styled.Text`
    ${globalFont.ko_bold}
    font-size: 16px;
    font-style: normal;
    text-align: center;
    color: #ffffff;
`

const Login = ({navigation}) => {
    const [isShow, setIsShow] = useState(false)

    // const buttonRef = useRef()

    // const measureButton = (x, y, width, height, pageX, pageY) => {
    //     return width > 0 ? setBtnWidth(`${width - 64}px`) : setBtnWidth('100%')
    // }

    // useEffect(() => {
    //     if (isMounted) {
    //         buttonRef.current.measure(measureButton)
    //     }
    // }, [isMounted])

    const openLoginLayer = () => setIsShow(!isShow)

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
                <LoginButtonBox>
                    <LoginButton activeOpacity={0.9} onPress={openLoginLayer}>
                        <LoginButtonText>시작하기</LoginButtonText>
                    </LoginButton>
                </LoginButtonBox>
                <LoginButtonLayer isShow={isShow} navigation={navigation} />
            </Cover>
        </Container>
    )
}

export default Login
