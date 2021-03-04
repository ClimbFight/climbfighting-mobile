import React, {Component} from 'react';
import {Text, View} from 'react-native';

class Loading extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('auth');
    }, 1000);
  }

  render() {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }
}

export default Loading;
