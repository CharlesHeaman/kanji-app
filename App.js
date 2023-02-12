import Axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { API_KEY } from '@env'
import SubjectInfo from './pages/SubjectInfo/SubjectInfo';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [subjectData, setSubjectData] = useState({});

  useEffect(() => {
    Axios.get("https://api.wanikani.com/v2/subjects/1", {
      headers: {
          "Content-Type": "application/json",
          "Wanikani-Revision": "20170710",
          "Authorization": `Bearer ${API_KEY}`
      },
      params: {}
    }).then((response) => {
        setSubjectData(response.data.data);
        setIsLoading(false);
    })  
  }, [])
  
  // console.log(Object.keys(subjectData))
  // console.log(subjectData.level)
  // console.log(subjectData.characters)
  // console.log(subjectData.meanings && subjectData.meanings.filter(meaning => meaning.primary)[0].meaning)
  // console.log(subjectData.meaning_mnemonic)
  // console.log(subjectData.amalgamation_subject_ids)

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ padding: 20}}>
        {!isLoading && <SubjectInfo subjectData={subjectData}/>}
      </View>
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
