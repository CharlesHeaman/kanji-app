import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import Kanji from './components/Kanji';
import Radical from './components/Radical';
import DashBoard from './pages/DashBoard/DashBoard';

const Stack = createNativeStackNavigator();

export default function App() {  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Dashboard'
          component={DashBoard}
        />
        <Stack.Screen
          name='Radical'
          component={Radical}
          options={({ route }) => 
            ({
              title: route.params.characters,
              headerStyle: {
                backgroundColor: '#0af',
                
              },
              headerTintColor: '#fff'
            })
          }
        />
        <Stack.Screen
          name='Kanji'
          component={Kanji}
          options={({ route }) => 
            ({
              title: route.params.characters,
              headerStyle: {
                backgroundColor: '#f100a1',
                
              },
              headerTintColor: '#fff'
            })
          }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // padding: 20
  },
});
