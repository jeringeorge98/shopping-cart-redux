import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const ShoppingCartIcon = props => {
  return (
    <View style={styles.iconstyle}>
      <View style={styles.container}>
        <Text style={{color:'white'}}>0</Text>
      </View>
      <Icon name="ios-cart" size={30} style={{marginTop:10}} />
    </View>
  );
};

const styles = StyleSheet.create({
  iconstyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding:5,

  },
  container: {
    backgroundColor: '#81b581',
    height: 30,
    width: 30,
    borderRadius: 50 / 2,
    zIndex: 2000,
    alignItems:'center',
    justifyContent:'center',
    position: 'absolute',
  bottom:15,
  right:15,
  top:5
  },
});
export {ShoppingCartIcon};
