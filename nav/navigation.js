import React, {Component} from 'react';
import {View} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from '../src/Home';
//import ShoppingScreen from '../src/Cart';
import BooksScreen from '../src/Books';
import {createAppContainer} from 'react-navigation';
import {ShoppingCartIcon} from '../src/Cart';
const MainNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'ShoppingApp',
      headerRight: <ShoppingCartIcon />,
    },
  },
  Books: {
    screen: BooksScreen,
    navigationOptions: {
      headerTitle: 'ShoppingApp',
      headerRight: <ShoppingCartIcon />,
    },
  },
});
const Appcontainer = createAppContainer(MainNavigator);
export class navigation extends Component {
  render() {
    return <Appcontainer />;
  }
}

export default navigation;
