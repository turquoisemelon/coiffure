import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import styled from "styled-components";

const StyledView = styled.View`
  flex: 1;
  background-color: #fff;
  alignItems: center;
  justifyContent: center;
`;

const StyledText = styled.Text`
  color: #2d174d;
  fontSize: 18px;
  margin-bottom: 16px;
`;

class App extends Component {
  onPressStart() {
    console.log('hi')
  }

  render() {
    return (
      <StyledView>
        <StyledText>Find your hair salon by location</StyledText>
        <Button
          onPress={this.onPressStart}
          title="Let's start"
          color="#90D0F0"
          accessibilityLabel="Find your hair salon by location blue button"
        />
      </StyledView>
    );
  }
}

export default App;
