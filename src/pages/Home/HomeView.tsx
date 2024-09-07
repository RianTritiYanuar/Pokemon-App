import React from "react";
import { TextInput, SafeAreaView, StyleSheet, FlatList } from "react-native";
import HomeController from "./HomeController";
import PokemonCard from "@/components/PokemonCard";
export default class HomeView extends HomeController {
  render() {
    const { pokemon } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <TextInput
          placeholder="Search your pokemon here"
          placeholderTextColor="#ECDFCC"
          style={styles.searchBarContainer}
        />
        <FlatList
          data={pokemon}
          numColumns={2}
          renderItem={() => <PokemonCard />}
          columnWrapperStyle={styles.columnWrapperStyle}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E201E",
    padding: 20,
  },
  searchBarContainer: {
    color: "#ECDFCC",
    backgroundColor: "#3C3D37",
    paddingHorizontal: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  columnWrapperStyle: {
    justifyContent: "space-between",
    marginBottom: 12,
  },
});
