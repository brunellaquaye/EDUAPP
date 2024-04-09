import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import MultimediaScreen from "./src/screens/MultimediaScreen";
import ViewCourseDetails from "./src/screens/ViewCourseDetails";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="home">
          <Stack.Screen
            options={{ headerShown: false }}
            name="home"
            component={HomeScreen}
          />

          <Stack.Screen
            options={{ headerShown: false }}
            name="Multimedia"
            component={MultimediaScreen}
          />

          <Stack.Screen
            options={{ headerShown: false }}
            name="ViewCourseDetails"
            component={ViewCourseDetails}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
