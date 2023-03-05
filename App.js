import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import SubjectInfo from './pages/SubjectInfo/SubjectInfo';
import DashBoard from './pages/DashBoard/DashBoard';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from './components/Icon';

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
          name='Subject'
          component={SubjectInfo}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20
  },
});
