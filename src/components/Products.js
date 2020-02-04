import React, {Component} from 'react';
import {View, Text, Button, FlatList} from 'react-native';
//import {Electronicsitems} from '.././src/Data';
export class Products extends Component {
  constructor(props) {
    super(props);
  }
  keyextractor = (item, index) => index.toString();

  renderItems = (item, index) => {
    
    return (
      <View>
        <Button
          title={'article' + '+' + item.index}
          onPress={() => alert('added to cart')}
        />
      </View>
    );
  };
  render() {
    alert(JSON.stringify(this.props.products));
    return (
      <FlatList
        data={this.props.products}
        keyExtractor={this.keyextractor}
        renderItem={this.renderItems}
      />
    );
  }
}

export default Products;
