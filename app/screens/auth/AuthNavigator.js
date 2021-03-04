/* eslint-disable import/no-named-as-default-member */
/**
 * @flow strict-local
 */
import React from 'react'
import {createStackNavigator} from 'react-navigation-stack'

import Login from './Login'
import Signup from './Signup'
import ExtraInfo from './ExtraInfo'

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

        extraInfo: {
            screen: ExtraInfo,
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
