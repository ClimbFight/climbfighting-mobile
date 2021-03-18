/**
 *
 * @format
 * @flow strict-local
 */
import React from 'react'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'

import {ThemeProvider} from 'styled-components'
import Loading from './screens/Loading'
import AuthNavigator from './screens/auth/AuthNavigator'
import HomeNavigator from './screens/home/HomeNavigator'
import theme from './styles/theme'
import light_theme from './styles/light_theme'

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

const App = () => {
    const AppContainer = createAppContainer(AppNavigator)

    const lightTheme = {
        ...theme,
        ...light_theme,
    }

    return (
        <ThemeProvider theme={lightTheme}>
            <AppContainer />
        </ThemeProvider>
    )
}

export default App
