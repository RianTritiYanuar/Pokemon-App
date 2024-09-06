import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RouteWrapper from "./routes/RouteWrapper";

const Stack = createNativeStackNavigator();

export class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <RouteWrapper />
      </NavigationContainer>
    );
  }
}

export default App;
