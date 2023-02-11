import Axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { API_KEY } from '@env'

export default function App() {
  const [subjectData, setSubjectData] = useState({});

  useEffect(() => {
    console.log(API_KEY)
    Axios.get("https://api.wanikani.com/v2/subjects/1", {
      headers: {
          "Content-Type": "application/json",
          "Wanikani-Revision": "20170710",
          "Authorization": `Bearer ${API_KEY}`
      },
      params: {}
    }).then((response) => {
        setSubjectData(response.data.data)
    })  
  }, [])
  
  console.log(Object.keys(subjectData))
  console.log(subjectData.level)
  console.log(subjectData.characters)
  console.log(subjectData.meanings && subjectData.meanings.filter(meaning => meaning.primary)[0].meaning)
  console.log(subjectData.meaning_mnemonic)
  console.log(subjectData.amalgamation_subject_ids)

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
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
