/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Button from './Button';

export default class TestCustomSourceExts extends Component {
  state = {count: 1}
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.welcome}>
          <Text>the count is {this.state.count}</Text>
        </View>
        <Button onPress={() => this.setState(({count}) => ({count: count + 1}))} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('TestCustomSourceExts', () => TestCustomSourceExts);
