import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class App extends Component {
  onPressStart() {
    console.log('hi')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Find your hair salon by location</Text>
        <Button
          onPress={this.onPressStart}
          title="Let's start"
          color="#90D0F0"
          accessibilityLabel="Find your hair salon by location blue button"
        />
      </View>
    );
  }
}

export default App;
