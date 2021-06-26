import React from 'react'
import styled from 'styled-components'
import {observer} from 'mobx-react-lite'
import Layout from './join/Layout'
import FooterButton from './components/FooterButton'
import {useJoinStore} from '../../context'
import okIcon from './images/email-ok-icon.png'
import {NAME_STATUS} from '../../stores/joinStore'

const InputBox = styled.View`
    width: 100%;
    margin-top: 97px;
`
const Input = styled.TextInput`
    border-bottom-color: ${({theme, ...props}) => {
        const {valid, value: name} = props
        if (name.length === 0) {
            return theme.colors['--grey-4']
        }
        if (valid === NAME_STATUS.EXIST || valid === NAME_STATUS.INVALID) {
            return theme.colors['--red']
        }
        if (valid === NAME_STATUS.VALID) {
            return theme.colors['--marine']
        }
        return theme.colors['--grey-4']
    }};
    border-bottom-width: 1px;
    font-size: ${({theme}) => theme.fontSizes.xl};
    ${({theme}) => theme.fonts.ko_bold}
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

const NameInput = observer(() => {
    const {
        name,
        setName,
        isNameValid,
        isNameInvalid,
        isAlreadyExist,
        nameStatus,
    } = useJoinStore()
    return (
        <InputBox>
            <Input onChangeText={setName} value={name} valid={nameStatus} />
            {isNameValid && <Icon source={okIcon} />}
            {isNameInvalid && <FormText>사용할 수 없는 문자입니다.</FormText>}
            {isAlreadyExist && <FormText>이미 사용중인 이름입니다.</FormText>}
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

const NameForm = ({navigation}) => {
    const headerProps = {
        title: '좋아요!\n이제 이름을 알려주세요.',
        subtitle:
            '본명이 아니어도 좋아요!\n나를 잘 표현하는 별명도 좋은 이름이 될 거에요.',
    }

    return (
        <>
            <Layout {...headerProps}>
                <NameInput />
            </Layout>
            <Footer>
                <FooterButton disabled text="다음" onPress={() => {}} />
            </Footer>
        </>
    )
}

export default observer(NameForm)
