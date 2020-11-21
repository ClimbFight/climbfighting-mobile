/**
 * @flow
 */

 import React from 'react'
 import { View, Text, StyleSheet } from "react-native";
 import { createMaterialTopTabNavigator } from "react-navigation-tabs";

 import Diary from './Diary';
 import Equip from './Equip';

 const HomeNavigator = createMaterialTopTabNavigator({
     diary: {
        screen: Diary,
        navigationOptions: {
            title: "등산 일기"
        }
     },

     equip: {
         screen: Equip,
         navigationOptions: {
             title: "등산은 장비빨"
         }
     }
 }, {
     initialRouteName: 'diary'
 });

 export default HomeNavigator;
