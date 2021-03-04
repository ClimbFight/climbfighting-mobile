import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    loginContainer: {
        alignItems: 'center',
        marginBottom: 50,
    },

    loginButton: {
        width: '80%',
        height: '15%',
        borderWidth: 1,
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
    },

    loginHelpContainer: {
        flex: 1,
        flexDirection: 'row',
    },
})

const Login = ({navigation}) => (
    <View style={styles.container}>
        <View style={{height: '50%'}} />
        <View style={styles.loginContainer}>
            <TouchableOpacity style={styles.loginButton}>
                <Text>Google 로그인</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginButton}>
                <Text>네이버 로그인</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginButton}>
                <Text>이메일 로그인</Text>
            </TouchableOpacity>

            <View style={styles.loginHelpContainer}>
                <TouchableOpacity
                    style={{width: '50%', alignItems: 'center'}}
                    onPress={() => navigation.navigate('extraInfo')}>
                    <Text>이메일 회원가입</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{width: '50%', alignItems: 'center'}}>
                    <Text>ID/PW 찾기</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
)

export default Login
