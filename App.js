import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/Login';
import AdminHome from './screens/AdminHome';
import HousekepperHome from './screens/HousekepperHome';




export default function App() {

  const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login}
      options={{
        title:"Clean Track",
        headerTintColor:"white",
        headerTitleAlign:"center",
        headerStyle: { backgroundColor: "#525FE1"},
      }} />
      <Stack.Screen name="AdminHome" component={AdminHome} options={{
        title:"Admin",
        headerTintColor:"white",
        headerTitleAlign:"center",
        headerStyle: { backgroundColor: "#525FE1"},
      }}/>
      <Stack.Screen name="HousekepperHome" component={HousekepperHome} options={{
        title:"Housekepper",
        headerTintColor:"white",
        headerTitleAlign:"center",
        headerStyle: { backgroundColor: "#525FE1"},
      }}/>
    </Stack.Navigator>
  );
}


  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
