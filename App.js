import 'react-native-url-polyfill/auto' // Solves Url error for IOS 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from './screens/RestaurantScreen';

//Redux
import { store } from './redux/store';
import { Provider } from 'react-redux';

const Stack = createNativeStackNavigator()


export default function App() {
  return (<NavigationContainer>
  <Provider store={store}>
    <Stack.Navigator>
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Restaurant' component={RestaurantScreen} />
    </Stack.Navigator>
  </Provider>
  </NavigationContainer>);
}

