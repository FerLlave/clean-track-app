import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/Login';
import AdminHome from './screens/AdminHome';
import HousekeeperHome from './screens/HousekeeperHome';
import RoomData from './components/RoomData';




export default function App() {

  const Stack = createStackNavigator();

  const [rooms, setRooms] = useState(RoomData.map((room) => 
    ({...room,completed:false}))
);
  

  const handleAssign = (roomTitle, housekeeper) => {
    const updatedRooms = rooms.map((room) =>
      room.title === roomTitle 
    ? { ...room, housekeeper, completed:true } : room
    );
    setRooms(updatedRooms);
  };

const MyStack = () => (

 
    <Stack.Navigator>
      
      <Stack.Screen 
      name="Login" 
      component={Login}
      options={{
        title:"Clean Track",
        headerTintColor:"white",
        headerTitleAlign:"center",
        headerStyle: { backgroundColor: "#525FE1"},
      }} />

      <Stack.Screen
       name="AdminHome" 
       
       options={{
        title:"Admin Hotel Quiam",
        headerTintColor:"white",
        headerTitleAlign:"center",
        headerStyle: { backgroundColor: "#525FE1"},
      }}
      >{() => <AdminHome rooms={rooms} onAssign={handleAssign} />}
      </Stack.Screen> 

      <Stack.Screen 
      name="HousekeeperHome" 
      options={{
        title:"Housekeeper",
        headerTintColor:"white",
        headerTitleAlign:"center",
        headerStyle: { backgroundColor: "#525FE1"},
      }}
      >
        {() => <HousekeeperHome rooms={rooms} onAssign={handleAssign}/>}
      </Stack.Screen>

    </Stack.Navigator>
  );



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
