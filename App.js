import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './src/views/LoginScreen';
import HomeScreen from './src/views/HomeScreen';
import UploadScreen from './src/views/UploadScreen';
import RegisterScreen from './src/views/RegisterScreen';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>

      <Stack.Navigator>

        <Stack.Screen
          name="Login"
          component={LoginScreen}
        />
        
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
        />

        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />

        <Stack.Screen
          name="Upload"
          component={UploadScreen}
        />

      </Stack.Navigator>

    </NavigationContainer>
  );

}