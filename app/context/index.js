import {useLocalObservable} from 'mobx-react-lite'
import React, {createContext, useContext} from 'react'
import {createAgreementStore} from '../stores/AgreementStore'
import {createJoinStore} from '../stores/joinStore'

const rootContext = createContext()
const {Provider} = rootContext
export const RootProvider = ({children}) => (
    <Provider
        value={{
            joinStore: useLocalObservable(createJoinStore),
            agreementStore: useLocalObservable(createAgreementStore),
        }}>
        {children}
    </Provider>
)

/**
 * @returns {ReturnType<createJoinStore>} createJoinStore
 */
export const useJoinStore = () => useContext(rootContext).joinStore

/**
 * @returns {ReturnType<createAgreementStore>} createAgreementStore
 */
export const useAgreementStore = () => useContext(rootContext).agreementStore
