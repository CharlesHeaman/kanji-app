import Axios from 'axios';
import { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { API_KEY } from '@env'
import SubjectInfo from './pages/SubjectInfo/SubjectInfo';

export default function App() {
  const [subjectLoading, setSubjectLoading] = useState(true);
  const [reviewLoading, setReviewLoading] = useState(true);
  const [subjectData, setSubjectData] = useState({});
  const [reviewStatData, setReviewStatData] = useState({});
  const [foundInData, setFoundInData] = useState([]);
  const [assignmentData, setAssignmentData] = useState([]);

  useEffect(() => {
    
    Axios.get("https://api.wanikani.com/v2/review_statistics", {
      headers: {
        "Content-Type": "application/json",
        "Wanikani-Revision": "20170710",
        "Authorization": `Bearer ${API_KEY}`
      },
      params: {
        subject_ids: 1
      }
    }).then((response) => {
      setReviewStatData(response.data.data);
      setReviewLoading(false);
    })  

    Axios.get("https://api.wanikani.com/v2/subjects/1", {
      headers: {
          "Content-Type": "application/json",
          "Wanikani-Revision": "20170710",
          "Authorization": `Bearer ${API_KEY}`
      },
      params: {}
      }).then((response) => {
          setSubjectData(response.data.data);
          setSubjectLoading(false);
    }) 
    
    Axios.get("https://api.wanikani.com/v2/subjects", {
      headers: {
          "Content-Type": "application/json",
          "Wanikani-Revision": "20170710",
          "Authorization": `Bearer ${API_KEY}`
      },
      params: {
        ids: [440, 449, 450, 451, 468, 488, 531, 533, 568, 590, 609, 633,3, 635, 709, 710, 724, 783, 808, 885, 913, 932, 965, 971, 1000, 20, 1020, 1085, 1113, 1119, 1126, 1137, 1178, 1198, 1241, 1249, 132640, 1340, 1367, 1372, 1376, 1379, 1428, 1431, 1463, 1491, 1506, 154721, 1547, 1559, 1591, 1655, 1769, 1851, 1852, 1855, 1868, 1869, 70, 635, 709, 710, 724, 783, 808, 885, 913, 932, 965, 971, 1000, 1020, 1085, 1113, 1119, 1126, 1137, 1178, 1198, 1241, 1249, 1326, 1340, 13, 1888, 1970, 2091, 2104, 2128, 2138, 2148, 2171, 2172, 2182, 22123459, 1591, 1655, 1769, 1851, 1852, 1855, 1868, 1869, 1888, 1970, 2091, 2104, 2128, 2138, 2148, 2171, 2172, 2182, 2212, 2277, 2334, 2375, , 2277, 2334, 2375, 2419, 2437].reduce((f, s) => `${f},${s}`)
      },
      }).then((response) => {
        setFoundInData(response.data.data)
    }) 

    Axios.get("https://api.wanikani.com/v2/assignments", {
      headers: {
          "Content-Type": "application/json",
          "Wanikani-Revision": "20170710",
          "Authorization": `Bearer ${API_KEY}`
      },
      params: {
        subject_ids: [440, 449, 450, 451, 468, 488, 531, 533, 568, 590, 609, 633,3, 635, 709, 710, 724, 783, 808, 885, 913, 932, 965, 971, 1000, 20, 1020, 1085, 1113, 1119, 1126, 1137, 1178, 1198, 1241, 1249, 132640, 1340, 1367, 1372, 1376, 1379, 1428, 1431, 1463, 1491, 1506, 154721, 1547, 1559, 1591, 1655, 1769, 1851, 1852, 1855, 1868, 1869, 70, 635, 709, 710, 724, 783, 808, 885, 913, 932, 965, 971, 1000, 1020, 1085, 1113, 1119, 1126, 1137, 1178, 1198, 1241, 1249, 1326, 1340, 13, 1888, 1970, 2091, 2104, 2128, 2138, 2148, 2171, 2172, 2182, 22123459, 1591, 1655, 1769, 1851, 1852, 1855, 1868, 1869, 1888, 1970, 2091, 2104, 2128, 2138, 2148, 2171, 2172, 2182, 2212, 2277, 2334, 2375, , 2277, 2334, 2375, 2419, 2437].reduce((f, s) => `${f},${s}`)
      },
      }).then((response) => {
        setAssignmentData(response.data.data)
    }) 
  }, [])
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {!subjectLoading && !reviewLoading && <SubjectInfo subjectData={subjectData} reviewStatData={reviewStatData} foundInData={foundInData} assignmentData={assignmentData}/>}
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
