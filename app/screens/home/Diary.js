import {createBottomTabNavigator} from 'react-navigation-tabs'

import Home from './Home'
import Search from './Search'
import Write from './Write'
import Alaram from './Alaram'
import MyPage from './MyPage'

const Diary = createBottomTabNavigator({
    home: {
        screen: Home,
    },
    search: {
        screen: Search,
    },
    write: {
        screen: Write,
    },
    alaram: {
        screen: Alaram,
    },
    mypage: {
        screen: MyPage,
    },
})

export default Diary
