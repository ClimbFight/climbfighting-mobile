/* eslint-disable import/no-named-as-default-member */
/**
 * @flow strict-local
 */
import {createStackNavigator} from 'react-navigation-stack'

import Login from './Login'
import Signup from './Signup'
import EmailForm from './EmailForm'
import NameForm from './NameForm'
import Agreement from './Agreement'

const AuthNavigator = createStackNavigator(
    {
        login: {
            screen: Login,
            navigationOptions: () => ({
                header: null,
            }),
        },
        signUp: {
            screen: Signup,
            navigationOptions: () => ({
                header: null,
            }),
        },
        joinEmail: {
            screen: EmailForm,
            navigationOptions: () => ({
                header: null,
            }),
        },
        joinName: {
            screen: NameForm,
            navigationOptions: () => ({
                header: null,
            }),
        },
        agreement: {
            screen: Agreement,
            navigationOptions: () => ({
                header: null,
            }),
        },
    },
    {
        initialRouteName: 'login',
    },
)

export default AuthNavigator
