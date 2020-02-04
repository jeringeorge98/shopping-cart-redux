import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Booksitems} from '../src/Data';
import Products from '../src/components/Products';
export class Books extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Products products={Booksitems} />
      </View>
    );
  }
}

export default Books;
