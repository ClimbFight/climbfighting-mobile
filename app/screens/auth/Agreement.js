import {observer} from 'mobx-react-lite'
import React, {useEffect} from 'react'
import {Text} from 'react-native'
import styled from 'styled-components'
import {useAgreementStore} from '../../context'
import FooterButton from './components/FooterButton'
import Layout from './join/Layout'

const List = styled.View`
    width: 100%;
    margin-top: 97px;
`
const CheckAllItem = styled.Text`
    padding: 14px 0 0 36px;
    text-align: left;
    ${({theme}) => theme.fonts.ko_bold}
    font-size: ${({theme}) => theme.fontSizes.base};
`

const Item = styled.Text`
    padding: 14px 0 0 36px;
    text-align: left;
    ${({theme}) => theme.fonts.ko_medium}
    font-size: ${({theme}) => theme.fontSizes.small};
`

const Checklist = observer(() => {
    const {init, list, clear} = useAgreementStore()

    useEffect(() => {
        init()

        return () => {
            clear()
        }
    }, [])

    return (
        <List>
            <CheckAllItem>전체 동의</CheckAllItem>
            {list.map(({id, title, isRequired, link}) => (
                <Item key={id}>
                    {title}
                    {isRequired ? '(필수)' : '(선택)'}
                </Item>
            ))}
        </List>
    )
})

const Footer = styled.View`
    display: flex;
    align-items: flex-end;
    bottom: 0;
    width: 100%;
    margin-top: 32px;
`

const Agreement = () => {
    const headerProps = {
        title: '환영합니다!',
        subtitle: '부제 정해져야 할 듯',
    }
    return (
        <>
            <Layout {...headerProps}>
                <Text>
                    <Checklist />
                </Text>
            </Layout>
            <Footer>
                <FooterButton disabled text="시작하기" onPress={() => {}} />
            </Footer>
        </>
    )
}

export default observer(Agreement)
