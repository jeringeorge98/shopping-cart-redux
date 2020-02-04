import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Electronicsitems} from '.././src/Data';
import Products from './components/Products';
export class Electronics extends Component {
  render() {
    alert(JSON.stringify(Electronicsitems));
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Products products={Electronicsitems} />
      </View>
    );
  }
}

export default Electronics;
