import React from "react";
import routeMap from "./routeMap";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const RouteWrapper = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      {routeMap.map((Current, index) => {
        return (
          <Stack.Screen
            key={`${Current.name}-${index}`}
            name={Current.name}
            component={Current.component}
          />
        );
      })}
    </Stack.Navigator>
  );
};

export default RouteWrapper;
