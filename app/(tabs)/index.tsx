import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

import Food from '@/components/Food';
import Foodcomponent from '@/assets/Fooddata/Foodcomponent';
import CustomNavBar  from './CustomNavBar';



export default function HomeScreen() {
  return (
    <View style={styles.Container}>
      
    <CustomNavBar />
  <Foodcomponent food = {Food} />
  </View>
  ) 
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    //alignItems: 'center',
    //justifyContent: 'center',
    padding:10,

  },
  

});


