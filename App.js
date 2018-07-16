import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
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
  constructor() {
    super();

    this.state = {
      data: null
    }
  }

  onPressStart = () => {
    console.log(this.state)
  }

  componentDidMount() {
    const YELP_API_KEY='ACeATw5YrPNWr-jZJmC5blZNvJJW-EAiexljofax4ocx1xFI91FiaLJ5Dw0ff4kZibREjQtgLj90y2HX90bqhM3oWLxxIf-Qb0W-8PdvsOoJj0N04M5PpBhWYPVLW3Yx';
    const fetchUrl = `https://api.yelp.com/v3/businesses/search?term=hair&latitude=43.653908&longitude=-79.384293`;
    return fetch(fetchUrl, {
      method: 'GET',
      headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${YELP_API_KEY}`
    }}).then((response) => response.json(), 
    (error) => {
      console.error('error', error)
    }).then((json) => {
      this.setState({ data: json })
    }).catch((ex) => {
      console.log('parsing failed', ex)
    });
  }

  render() {
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
