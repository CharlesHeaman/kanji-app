import Axios from "axios";
import { API_KEY } from '@env';
import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native"
import Page from "../../components/Page"

const Review = (props) => {
    const [assignemntIsLoading, setAssignemntIsLoading] = useState(true);
    const [subjectIsLoading, setSubjectIsLoading] = useState(true);
    const [completeCount, setCompleteCount] = useState(0);
    const [correctRate, setCorrectRate] = useState(0);
    const [assignmentData, setAssignmentData] = useState([]);
    const [subjectData, setSubjectData] = useState([]);
    const [assignmentIndex, setAssignemntIndex] = useState(0);

    useEffect(() => {
        getAssignments();
        getSubjects();
        setAssignemntIndex(true);
        setSubjectIsLoading(true);
      }, [])

    const getAssignments = (pageAfter) => {
        Axios.get("https://api.wanikani.com/v2/assignments", {
            headers: {
                "Content-Type": "application/json",
                "Wanikani-Revision": "20170710",
                "Authorization": `Bearer ${API_KEY}`
            },
            params: {
                page_after_id: pageAfter
            }
        }).then((response) => {
            if (response.data.pages.previous_url) {
                setAssignmentData(prevState => prevState.concat(response.data.data.filter((assignment) => new Date(assignment.data.available_at) < new Date() && assignment.data.burned_at === null)))
            } else { 
                setAssignmentData(response.data.data.filter((assignment) => new Date(assignment.data.available_at) < new Date() && assignment.data.burned_at === null))
            }
            if (response.data.pages.next_url) {
                getAssignments(response.data.pages.next_url.split('page_after_id=')[1])
            } else {
                setAssignemntIsLoading(false);
            }
        }) 
    }

    const getSubjects = (pageAfter) => {
        Axios.get("https://api.wanikani.com/v2/subjects", {
          headers: {
            "Content-Type": "application/json",
            "Wanikani-Revision": "20170710",
            "Authorization": `Bearer ${API_KEY}`
          },
          params: {
            page_after_id: pageAfter
          }
        }).then((response) => {
          if (response.data.pages.previous_url) {
            setSubjectData(prevState => prevState.concat(response.data.data))
          } else { 
            setSubjectData(response.data.data)
          }
          if (response.data.pages.next_url) {
            getSubjects(response.data.pages.next_url.split('page_after_id=')[1])
          } else {
            setSubjectIsLoading(false);
          }
        }) 
    }
    
    return (
        <Page>
            {/* <Text>{correctRate}</Text>
            <Text>{completeCount}</Text>
            <Text>{assignmentData.length}</Text> */}

            {(!assignemntIsLoading && !subjectIsLoading) && <View style={[styles.charactersWrapper, styles[subjectData.find((subject) => subject.id === assignmentData[assignmentIndex].data.subject_id).object]]}> 
                <Text style={styles.charactersText}>{subjectData.find((subject) => subject.id === assignmentData[assignmentIndex].data.subject_id).data.characters}</Text>
            </View>}
            <View style={styles.questionWrapper}>
                <Text style={styles.questionText}>Vocabulary</Text>
                <Text style={[styles.questionText, styles.strongText]}>Meaning</Text>
            </View>
            <View style={styles.inputWrapper}>
                <TextInput
                    style={styles.inputStyle}
                    autoFocus
                    autoCorrect={false}
                    spellCheck={false}
                    placeholder='Your Response'
                />
            </View>        
            <Button title='Next' onPress={() => setAssignemntIndex(assignmentIndex + 1)}/>
        </Page>
    )
}

const styles = StyleSheet.create({
    charactersWrapper: {
        borderBottomColor: '#d5d5d5',
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
    },
    radical: {
        backgroundColor: '#0af',
    },  
    kanji: {
        backgroundColor: '#f100a1',
    },
    vocabulary: {
        backgroundColor: '#a0f'
    },
    charactersText: {
        color: '#fff',
        fontSize: 64,
        textAlign: 'center'
    },
    questionWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e9e9e9',
        padding: 12,
        borderBottomColor: '#d5d5d5',
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    questionText: {
        color: '#555',
        fontSize: 18,
    },
    strongText: {
        fontWeight: '700',
        paddingLeft: 4
    },
    inputWrapper: {
        backgroundColor: '#fff',
        borderBottomColor: '#d5d5d5',
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    inputStyle: {
        textAlign: 'center',
        fontSize: 24,
        padding: 12
    },
    inputWrapper: {
        backgroundColor: '#fff',
        borderBottomColor: '#d5d5d5',
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    inputStyle: {
        textAlign: 'center',
        fontSize: 24,
        padding: 12
    }
  });

export default Review