import FoundInKanji from "./components/radical/FoundInKanji"
import Name from "./components/radical/Name"
import Progress from "./components/Progress"
import SubjectHeader from "./components/SubjectHeader.js"
import Page from "../../components/Page"
import { useEffect, useState } from "react"
import { API_KEY } from '@env'
import Axios from "axios"
import { Button } from "react-native"
import Icon from "../../components/Icon"

const SubjectInfo = (props) => {
    const subjectID = 1;
    const [subjectLoading, setSubjectLoading] = useState(true);
    const [reviewLoading, setReviewLoading] = useState(true);
    const [foundInLoading, setFoundInLoading] = useState(true)
    const [assignmentLoading, setAssignmentLoading] = useState(true)
    const [subjectData, setSubjectData] = useState({});
    const [reviewStatData, setReviewStatData] = useState({});
    const [foundInData, setFoundInData] = useState([]);
    const [assignmentData, setAssignmentData] = useState([]);

    useEffect(() => {
        getSubjectData();
        getReviewData();
    }, [])

    function getSubjectData() {
        Axios.get(`https://api.wanikani.com/v2/subjects/${subjectID}`, {
            headers: {
                "Content-Type": "application/json",
                "Wanikani-Revision": "20170710",
                "Authorization": `Bearer ${API_KEY}`
            },
            params: {}
            }).then((response) => {
                setSubjectData(response.data.data);
                setSubjectLoading(false);
                getFoundInData(response.data.data.amalgamation_subject_ids);
                getAssignmentData(response.data.data.amalgamation_subject_ids);
            }
        )    
    }

    function getReviewData() {
        Axios.get("https://api.wanikani.com/v2/review_statistics", {
            headers: {
                "Content-Type": "application/json",
                "Wanikani-Revision": "20170710",
                "Authorization": `Bearer ${API_KEY}`
            },
            params: {
                subject_ids: subjectID
            }
            }).then((response) => {
                setReviewStatData(response.data.data);
                setReviewLoading(false);
            }
        )  
    }

    function getFoundInData(subjectIds) {
        Axios.get("https://api.wanikani.com/v2/subjects", {
          headers: {
              "Content-Type": "application/json",
              "Wanikani-Revision": "20170710",
              "Authorization": `Bearer ${API_KEY}`
          },
          params: {
            ids: subjectIds.reduce((f, s) => `${f},${s}`)
          },
          }).then((response) => {
            setFoundInLoading(false);
            setFoundInData(response.data.data)
        }) 
    }

    function getAssignmentData(subjectIds) {
        Axios.get("https://api.wanikani.com/v2/assignments", {
          headers: {
              "Content-Type": "application/json",
              "Wanikani-Revision": "20170710",
              "Authorization": `Bearer ${API_KEY}`
          },
          params: {
            subject_ids: subjectIds.reduce((f, s) => `${f},${s}`)
          },
          }).then((response) => {
            setAssignmentLoading(false);
            setAssignmentData(response.data.data)
        }) 
    }

    return (
        <Page>
            {/* {!subjectLoading && 
                <>
                    <SubjectHeader 
                        level={subjectData.level}
                        characters={subjectData.characters}
                        primaryMeaning={subjectData.meanings.find((meaning) => meaning.primary).meaning}
                    />
                    <Name 
                        mnemonic={subjectData.meaning_mnemonic}
                        primaryMeaning={subjectData.meanings.find((meaning) => meaning.primary).meaning}
                    />
                </>
            }
            {!foundInLoading && !assignmentLoading && 
                <FoundInKanji 
                    foundInData={foundInData} 
                    assignmentData={assignmentData}    
                />
            }
            {!reviewLoading && 
                <Progress 
                    reviewStatData={reviewStatData[0].data
                }/>
            } */}
        </Page>
    )
}

export default SubjectInfo