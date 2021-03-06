import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/home';
import Signin from './src/screens/signin';
import Signup from './src/screens/signup';
import Create from './src/screens/create';
import Edit from './src/screens/edit';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyB5Uh6V4KxB0I9I0tUYYiajT-tDpTKNZGI",
  authDomain: "my-note-app-d7796.firebaseapp.com",
  projectId: "my-note-app-d7796",
  storageBucket: "my-note-app-d7796.appspot.com",
  messagingSenderId: "382188591289",
  appId: "1:382188591289:web:2673e3aff293db790fa368"
};

const app = initializeApp(firebaseConfig);



const AppTheme = {
  ...DefaultTheme,
  
  colors : {
    ...DefaultTheme.colors,
    background: '#fff'
  }
}

const Stack = createNativeStackNavigator();

export default function App() {
  const user = false;
  return (
    <NavigationContainer theme={AppTheme}>
      <Stack.Navigator>
        {
          user ? (
            <>
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Create" component={Create} />
              <Stack.Screen name="Edit" component={Edit} />
            </>
          ) : (
            <>
              <Stack.Screen name="Signin" options={{headerShown: false}} component={Signin} />
              <Stack.Screen name="Signup" component={Signup} />
            </>
          )
        }
        
      </Stack.Navigator>
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
