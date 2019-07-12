import React, { Component } from 'react';
import { AppRegistry, Image, View, StyleSheet } from 'react-native';
import AppHeader from './components/AppHeader';
import Home from './pages/Home';

export default class Bananas extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AppHeader text="Math App"/>
        <Home/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dcdcdc',
    alignItems: 'center',
  },
});

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => Bananas);
