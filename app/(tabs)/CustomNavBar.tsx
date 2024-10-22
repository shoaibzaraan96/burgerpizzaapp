import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import Food from '@/components/Food';
import Foodcomponent from '@/assets/Fooddata/Foodcomponent';


export default function CustomNavBar(){
    return(
    <View style={styles.Container}>
        <View style={{backgroundColor:'red',flex:1,justifyContent:'center'}}>
            <Text style={{textAlign:'center',justifyContent:'center'}}>
                Meal
            </Text>
        </View>
        <View style={{backgroundColor:'green',flex:1,justifyContent:'center'}}>
            <Text style={{textAlign:'center',justifyContent:'center'}}>
                Snacks
            </Text>
        </View>
        <View style={{backgroundColor:'blue',flex:1,justifyContent:'center'}}>
            <Text style={{textAlign:'center'}}>
                Slides
            </Text>
        </View>
    </View>
    )

}
const styles = StyleSheet.create({
    Container: {
        width:'100%',
      flex: 0.05,
      backgroundColor: 'yellow',
      flexDirection:'row',
     justifyContent:'space-between'
    
  
    },

  
  });