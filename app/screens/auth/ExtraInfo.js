import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

class ExtraInfo extends React.Component {
  navigation = this.props.navigation;
  state = {
    email: '',
    name: '',
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerFont}>추가 정보 입력</Text>
        </View>

        <View style={styles.extraForm}>
          <View>
            <Text style={styles.textInputHeader}>이메일</Text>
            <TextInput
              style={styles.textInputStyle}
              onChangeText={(email) => this.setState({email})}
              placeholder="abc@test.com"
              value={this.state.email}
            />
          </View>

          <View>
            <Text style={styles.textInputHeader}>별명 *</Text>
            <TextInput
              style={styles.textInputStyle}
              onChangeText={(name) => this.setState({name})}
              placeholder="별명"
              value={this.state.name}
            />
          </View>

          <View>
            <Text>
              만 14세 이상이며 이용약관, 개인정보 처리 방침, 프로모션 사용에
              모두 동의합니다.
            </Text>
          </View>

          <View style={styles.termStyle}>
            <Text>만 14세 이상입니다. (필수)</Text>
            <Text>서비스 이용 약관 동의 (필수)</Text>
            <Text>개인정보 처리방침 (필수)</Text>
            <Text>이벤트 등 프로모션 사용 동의(선택) </Text>
          </View>

          <View style={{height: '20%'}} />

          <TouchableOpacity style={styles.completeBtn}>
            <Text
              style={styles.completeBtnTxt}
              onPress={() => this.navigation.navigate('home')}>
              회원가입 완료
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: '8%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },

  headerFont: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  extraForm: {
    padding: 20,
  },

  textInputHeader: {
    fontSize: 13,
    fontWeight: 'bold',
  },

  textInputStyle: {
    borderWidth: 1,
    paddingLeft: 5,
    marginTop: 5,
    marginBottom: 20,
  },

  termStyle: {
    padding: 5,
    paddingBottom: 30,
    marginTop: 10,
    borderWidth: 1,
    justifyContent: 'center',
  },

  completeBtn: {
    height: '11%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: '#dedede',
  },
  completeBtnTxt: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default ExtraInfo;
