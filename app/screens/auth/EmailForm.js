import React, {useState} from 'react'
import styled from 'styled-components'
import Layout from './join/Layout'

const Input = styled.TextInput`
    width: 100%;
    border-bottom-color: ${({theme}) => theme.colors['--grey-4']};
    border-bottom-width: 1px;
    margin-top: 97px;
`

const EmailInput = ({navigation}) => {
    const [email, setEmail] = useState('')

    return <Input onChangeText={(value) => setEmail(value)} value={email} />
}

const EmailForm = ({navigation}) => {
    const headerProps = {
        title: '반가워요!\n이메일을 알려주세요.',
        subtitle: '이메일 주소는 다른 사용자에게 공개되지 않아요.',
    }

    return (
        <Layout {...headerProps}>
            <EmailInput navigation={navigation} />
        </Layout>
    )
}

export default EmailForm
