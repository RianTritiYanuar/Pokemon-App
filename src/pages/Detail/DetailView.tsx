import React from "react";
import { View, Text } from "react-native";
import DetailController from "./DetailController";

export default class DetailView extends DetailController {
  render() {
    return (
      <View>
        <Text>This is detail</Text>
      </View>
    );
  }
}
