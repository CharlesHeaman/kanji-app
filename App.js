import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import SubjectInfo from './pages/SubjectInfo/SubjectInfo';
import DashBoard from './pages/DashBoard/DashBoard';

export default function App() {  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* <SubjectInfo/> */}
        <DashBoard/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20
  },
});
