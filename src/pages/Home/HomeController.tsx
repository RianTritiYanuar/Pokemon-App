import { Component } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

// Props
interface Props {
  navigation: any;
}

// State
interface S {
  sampleStateNumber: number;
}

export default class HomeController extends Component<Props, S> {
  constructor(props: Props) {
    super(props);

    this.state = {
      sampleStateNumber: 0,
    };
  }

  componentDidMount = async () => {
    console.log("Component Mount");
  };

  navigateToDetail = () => {
    const { navigation } = this.props;
    navigation.navigate("Detail");
  };
}
