import React, {useState} from 'react'
import styled from 'styled-components'
import Layout from './join/Layout'

/**
 * 빈 값 : --grey-4
 * 유효한 값 : --marine
 * 유효하지 않은 값 : --red
 */
const Input = styled.TextInput`
    width: 100%;
    border-bottom-color: ${({theme, ...props}) =>
        props.value.length > 0
            ? theme.colors['--grey-4']
            : theme.colors['--red']};
    border-bottom-width: 1px;
    margin-top: 97px;
`

const FormText = styled.Text`
    padding: 8px;
    width: 100%;
    ${({theme}) => theme.fonts.ko_light}
    font-size: 12px;
    color: ${({theme}) => theme.colors['--red']};
`

const EmailInput = ({navigation}) => {
    const [email, setEmail] = useState('')

    return (
        <>
            <Input onChangeText={(value) => setEmail(value)} value={email} />
            <FormText>유효한 이메일 주소가 아닙니다.</FormText>
        </>
    )
}

const EmailForm = ({navigation}) => {
    const headerProps = {
        title: '반가워요!\n이메일을 알려주세요.',
        subtitle: '이메일 주소는 다른 사용자에게 공개되지 않아요.',
    }

    const buttonConfig = {
        text: '다음',
        onPress: () => {},
        disabled: true,
    }

    return (
        <Layout {...headerProps} buttonConfig={buttonConfig}>
            <EmailInput navigation={navigation} />
        </Layout>
    )
}

export default EmailForm
