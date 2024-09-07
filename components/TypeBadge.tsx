import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface Props {
  type: string;
}

const TypeBadge: React.FC<Props> = ({ type }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{type}</Text>
    </View>
  );
};

export default TypeBadge;

const styles = StyleSheet.create({
  container: {
    width: "48%",
    backgroundColor: "#06D001",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    paddingVertical: 2,
    marginRight: 4,
    flexShrink: 1,
  },
  text: {
    fontSize: 10,
    color: "white",
    textTransform: "uppercase",
  },
});
