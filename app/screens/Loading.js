import React, {useEffect} from 'react'
import {Text, View} from 'react-native'

const Loading = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('auth')
        }, 1000)
    }, [])

    return (
        <View>
            <Text>Loading</Text>
        </View>
    )
}

export default Loading
