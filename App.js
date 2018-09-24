import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import styled from 'styled-components';
import { getSalonInfo } from './common.actions'

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

const App = (props) => {
  // todo: use FlatList on line 56
  return (
    <StyledView>
      <StyledText>Find your hair salon by location</StyledText>
      {
        this.state.data 
          ? <StyledView> 
            {this.state.data.businesses.map((item) => <Text>{item.name}</Text>)}
            </StyledView>
          : null
      }
      <Button
        onPress={() => getSalonInfo()}
        title="Let's start"
        color="#90D0F0"
        accessibilityLabel="Find your hair salon by location blue button"
      />
    </StyledView>
  );
}

const connectConfig = connect(state => ({common: state.common}), { getSalonInfo });

export default connectConfig(App);
