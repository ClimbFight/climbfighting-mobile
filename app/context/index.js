import {useLocalObservable} from 'mobx-react-lite'
import React, {createContext, useContext} from 'react'
import {createJoinStore} from '../stores/joinStore'

const rootContext = createContext()
const {Provider} = rootContext
export const RootProvider = ({children}) => (
    <Provider
        value={{
            joinStore: useLocalObservable(createJoinStore),
        }}>
        {children}
    </Provider>
)

/**
 * @returns {ReturnType<createJoinStore>} createJoinStore 스토어
 */
export const useJoinStore = () => useContext(rootContext).joinStore
