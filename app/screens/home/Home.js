import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components';

const Title = styled.h1`
  color: #bbb;
  margin: 1rem;
`;

const Home = () => {
  return (
    <View>
      <Title>This is Title</Title>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
