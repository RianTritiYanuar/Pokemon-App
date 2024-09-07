import { Component } from "react";

// Props
interface Props {
  navigation: any;
}

// State
interface S {
  pokemon: string[];
}

export default class HomeController extends Component<Props, S> {
  constructor(props: Props) {
    super(props);

    this.state = {
      pokemon: [],
    };
  }

  componentDidMount = async () => {
    console.log("Component Mount");
    this.fetchPokemon();
  };

  fetchPokemon = async () => {
    const url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20";
    try {
      const response = await fetch(url);
      const json = await response.json();
      if (json.results.length > 0) {
        this.setState({
          pokemon: json.results,
        });
      }
    } catch (error: any) {
      console.error(error.message);
    }
  };

  navigateToDetail = () => {
    const { navigation } = this.props;
    navigation.navigate("Detail");
  };
}
