import React from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import TypeBadge from "./TypeBadge";

const PokemonCard = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.firstRow}>
        <View style={styles.IDContainer}>
          <View style={styles.typeContainer} />
          <Text style={styles.IDText}>#0001</Text>
        </View>
      </View>
      <View style={styles.secondRow}>
        <Image
          width={180}
          height={180}
          source={{
            uri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
          }}
        />
      </View>
      <View style={styles.thirdRow}>
        <Text style={styles.nameText}>Bulbasaur</Text>
      </View>
      <View style={styles.fourthRow}>
        <TypeBadge type="Grass" />
        <TypeBadge type="Poison" />
      </View>
    </TouchableOpacity>
  );
};

export default PokemonCard;

const styles = StyleSheet.create({
  container: {
    width: "48%",
    backgroundColor: "#3C3D37",
    padding: 8,
    borderRadius: 10,
  },
  firstRow: { alignSelf: "flex-start" },
  IDContainer: {
    backgroundColor: "#40534C",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    borderRadius: 10,
  },
  typeContainer: {
    width: 16,
    height: 16,
    borderRadius: 30,
    backgroundColor: "#06D001",
    marginRight: 3,
  },
  IDText: { fontSize: 10, color: "#ECDFCC" },
  secondRow: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: -30,
  },
  thirdRow: { marginBottom: 5 },
  nameText: {
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  fourthRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
