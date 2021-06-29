import {observer} from 'mobx-react-lite'
import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {useAgreementStore} from '../../context'
import FooterButton from './components/FooterButton'
import Layout from './join/Layout'

import checkedIcon from './images/agree-icon-active.png'
import uncheckedIcon from './images/agree-icon-inactive.png'
import detailIcon from './images/detail-btn.png'

const List = styled.View`
    width: 100%;
    margin-top: 97px;
`

const TextWithIcon = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`

const CheckAllItem = styled.TouchableOpacity`
    padding: 14px 0 14px 0;
    border-bottom-color: ${({theme}) => `${theme.colors['--white-2']}`};
    border-bottom-width: 1px;
    position: relative;
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`
const TitleBold = styled.Text`
    ${({theme}) => theme.fonts.ko_bold}
    font-size: ${({theme}) => theme.fontSizes.base};
    color: ${({theme}) => `${theme.colors['--grey-1']}`};
`

const TitleNormal = styled.Text`
    ${({theme}) => theme.fonts.ko_medium}
    font-size: ${({theme}) => theme.fontSizes.small};
    color: ${({theme}) => `${theme.colors['--grey-3']}`};
`

const Item = styled.TouchableOpacity`
    padding: 14px 0 14px 0;
    border-bottom-color: ${({theme}) => `${theme.colors['--white-2']}`};
    border-bottom-width: 1px;
    position: relative;
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

const Icon = styled.Image`
    margin-right: 8px;
`

const DetailLink = styled.TouchableOpacity``

const LinkIcon = styled.Image``

const Checklist = observer(() => {
    const [allChecked, setAllChecked] = useState(false)

    const {
        init,
        list,
        clear,
        isAllChecked,
        toggleAll,
        toggle,
    } = useAgreementStore()

    useEffect(() => {
        init()

        return () => {
            clear()
        }
    }, [])

    useEffect(() => {
        setAllChecked(isAllChecked)
    }, [isAllChecked])

    const onCheck = (id, {all = false} = {}) => {
        if (all) {
            toggleAll(!allChecked)
            setAllChecked((prev) => !prev)
            return
        }
        toggle(id)
    }

    const onClickLink = (link) => {
        /** [TODO] link 연결 */
    }

    return (
        <List>
            <CheckAllItem
                activeOpacity={1}
                onPress={() => onCheck(null, {all: true})}>
                <TextWithIcon>
                    {isAllChecked ? (
                        <Icon source={checkedIcon} />
                    ) : (
                        <Icon source={uncheckedIcon} />
                    )}
                    <TitleBold>전체 동의</TitleBold>
                </TextWithIcon>
            </CheckAllItem>
            {list.map(({id, title, isRequired, isChecked, link}) => (
                <Item key={id} activeOpacity={1} onPress={() => onCheck(id)}>
                    <TextWithIcon>
                        {isChecked ? (
                            <Icon source={checkedIcon} />
                        ) : (
                            <Icon source={uncheckedIcon} />
                        )}
                        <TitleNormal>
                            {title}
                            {isRequired ? '(필수)' : '(선택)'}
                        </TitleNormal>
                    </TextWithIcon>
                    <DetailLink onPress={onClickLink}>
                        <LinkIcon source={detailIcon} />
                    </DetailLink>
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
    const {isActive} = useAgreementStore()
    const headerProps = {
        title: '환영합니다!',
        subtitle: '부제 정해져야 할 듯',
    }
    const goMain = () => {
        /** [TODO] 메인 네비게이터 연결 */
    }
    return (
        <>
            <Layout {...headerProps}>
                <Checklist />
            </Layout>
            <Footer>
                <FooterButton
                    disabled={!isActive}
                    text="시작하기"
                    onPress={goMain}
                />
            </Footer>
        </>
    )
}

export default observer(Agreement)
