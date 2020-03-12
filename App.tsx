import React, { useState } from "react";

// Import of React-Navigation //
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Screen //
import List from "./containers/ListScreen";
import Splash from "./containers/SplashScreen";
import Menu from "./containers/MenuScreen";

// Stack for React-Navigation //
const Stack = createStackNavigator();

export default function App() {
  // State of loading //
  const [isLoading, setIsLoading] = useState(true);

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        {isLoading ? (
          <Stack.Screen options={{ header: () => null }} name="Splash">
            {() => <Splash setIsLoading={setIsLoading} />}
          </Stack.Screen>
        ) : (
          <Stack.Screen
            name="menu"
            options={{
              title: "menu"
            }}
          >
            {() => (
              <Stack.Navigator>
                <Stack.Screen
                  name="menuScreen"
                  options={{ header: () => null }}
                >
                  {() => <Menu />}
                </Stack.Screen>

                <Stack.Screen
                  name="listScreen"
                  options={{ header: () => null }}
                >
                  {() => <List />}
                </Stack.Screen>
              </Stack.Navigator>
            )}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
