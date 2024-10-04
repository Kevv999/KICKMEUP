import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/screens/home";
import Search from "./src/screens/search";
import productPage from "./src/screens/productPage";

const Stack = createStackNavigator();
function HomeScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="productPage" component={productPage} />
    </Stack.Navigator>
  );
}

function SearchScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="productPage" component={productPage} />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Search" component={SearchScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
