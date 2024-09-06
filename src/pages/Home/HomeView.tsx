import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import HomeController from "./HomeController";

export default class HomeView extends HomeController {
  render() {
    return (
      <View>
        <Text>This is home</Text>
        <TouchableOpacity onPress={this.navigateToDetail}>
          <Text>NAVIGATE</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
