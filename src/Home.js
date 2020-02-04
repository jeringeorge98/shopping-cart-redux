import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
export class Home extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Button
        style={{margin:5}}
          title="Electronics Screen "
          onPress={() => this.props.navigation.navigate('Electronics')}
        />
        <Button
                  
          title="Books Screen"
          onPress={() => this.props.navigation.navigate('Books')}
        />
      </View>
    );
  }
}

export default Home;
