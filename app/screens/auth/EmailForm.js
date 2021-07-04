import {observer} from 'mobx-react-lite'
import React, {useEffect} from 'react'
import styled from 'styled-components'
import {useJoinStore} from '$context'
import {EMAIL_STATUS} from '$/stores/joinStore'
import Layout from '$screens/auth/join/Layout'
import FooterButton from '$screens/auth/components/FooterButton'
import {isValidEmailAddr} from '$utils/'
import okIcon from './images/email-ok-icon.png'

const InputBox = styled.View`
    width: 100%;
    margin-top: 97px;
`
const Input = styled.TextInput`
    border-bottom-color: ${({theme, ...props}) => {
        const email = props.value
        if (email.length === 0) {
            return theme.colors['--grey-4']
        }
        if (!isValidEmailAddr(email)) {
            return theme.colors['--red']
        }
        if (isValidEmailAddr(email)) {
            return theme.colors['--marine']
        }
        return theme.colors['--grey-4']
    }};
    border-bottom-width: 1px;
    font-size: ${({theme}) => theme.fontSizes.xl};
    ${({theme}) => theme.fonts.ko_medium}
    color: ${({theme}) => theme.colors['--grey-1']};
`

const FormText = styled.Text`
    padding: 8px;
    width: 100%;
    ${({theme}) => theme.fonts.ko_light}
    font-size: 12px;
    color: ${({theme}) => theme.colors['--red']};
`

const Icon = styled.Image`
    position: absolute;
    right: 0;
    bottom: 10px;
`

const EmailInput = observer(() => {
    const {email, setEmail, status, isValid} = useJoinStore()

    useEffect(() => {
        return () => {
            setEmail('')
        }
    }, [])

    return (
        <InputBox>
            <Input
                keyboardType="email-address"
                onChangeText={setEmail}
                value={email}
            />
            {isValid && <Icon source={okIcon} />}
            {status === EMAIL_STATUS.INVALID && (
                <FormText>유효한 이메일 주소가 아닙니다.</FormText>
            )}
        </InputBox>
    )
})

const Footer = styled.View`
    display: flex;
    align-items: flex-end;
    bottom: 0;
    width: 100%;
    margin-top: 32px;
`

const EmailForm = ({navigation}) => {
    const {isValid} = useJoinStore()
    const headerProps = {
        title: '반가워요!\n이메일을 알려주세요.',
        subtitle: '이메일 주소는 다른 사용자에게 공개되지 않아요.',
    }

    const goNext = () => {
        navigation.navigate('joinName')
    }

    return (
        <>
            <Layout {...headerProps}>
                <EmailInput navigation={navigation} />
            </Layout>
            <Footer>
                <FooterButton
                    disabled={!isValid}
                    text="다음"
                    onPress={goNext}
                />
            </Footer>
        </>
    )
}

export default observer(EmailForm)
