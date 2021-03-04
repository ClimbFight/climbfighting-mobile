/**
 *
 * @format
 * @flow strict-local
 */

import {createAppContainer, createSwitchNavigator} from 'react-navigation'

import Loading from './screens/Loading'
import AuthNavigator from './screens/auth/AuthNavigator'
import HomeNavigator from './screens/home/HomeNavigator'

const AppNavigator = createSwitchNavigator(
    {
        loading: Loading,
        auth: AuthNavigator,
        home: HomeNavigator,
    },
    {
        initialRouteName: 'loading',
    },
)

export default createAppContainer(AppNavigator)
