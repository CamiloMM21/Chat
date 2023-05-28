import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import UserDetail from "./screens/UserDetail";
import CreateUser from "./screens/CreateUser";
import UsersList from "./screens/UsersList";

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CreateUser" component={CreateUser} />
      <Stack.Screen name="UsersList" component={UsersList} />
      
      <Stack.Screen name="UserDetail" component={UserDetail} />
    </Stack.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

