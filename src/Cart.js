import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const ShoppingCartIcon = props => {
  return (
    <View style={styles.iconstyle}>
      
      <Icon name="ios-cart" size={30} />
    </View>
  );
};

const styles = StyleSheet.create({
  iconstyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export {ShoppingCartIcon};
