import { API_KEY } from '@env';
import Axios from 'axios';
import { useEffect, useState } from 'react';
import KanjiIcon from '../../components/KanjiIcon';
import Page from '../../components/Page';
import IconGrid from '../../components/IconGrid';
import ProgressTile from '../../components/ProgressTile';
import RadicalIcon from '../../components/RadicalIcon';
import Section from '../../components/Section';
import SectionHeader from '../../components/SectionHeader';
import SmallHeader from '../../components/SmallHeader';
import DashBoardButton from './components/DashboardButton';
import SRCProgressTile from './components/SRCProgressTile';

const DashBoard = ({ navigation }) => {
    const [levelData, setLevelData] = useState({})
    const [assignmentData, setAssignmentData] = useState([]);
    const [subjectData, setSubjectData] = useState([]);
    const [reviewStatistics, setReviewStatistics] = useState([])

    useEffect(() => {
      getLevels();
      getAssignments();
      getSubjects();
      getReviewStatistics();
    }, [])

    const getLevels = () => {
      Axios.get("https://api.wanikani.com/v2/level_progressions", {
        headers: {
          "Content-Type": "application/json",
          "Wanikani-Revision": "20170710",
          "Authorization": `Bearer ${API_KEY}`
        }
      }).then((response) => {
        setLevelData(response.data.data)
      }) 
    }

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
          setAssignmentData(prevState => prevState.concat(response.data.data))
        } else { 
          setAssignmentData(response.data.data)
        }
        if (response.data.pages.next_url) {
          getAssignments(response.data.pages.next_url.split('page_after_id=')[1])
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
        }
      }) 
    }

    const getReviewStatistics = (pageAfter) => {
      Axios.get("https://api.wanikani.com/v2/review_statistics", {
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
          setReviewStatistics(prevState => prevState.concat(response.data.data))
        } else { 
          setReviewStatistics(response.data.data)
        }
        if (response.data.pages.next_url) {
          getReviewStatistics(response.data.pages.next_url.split('page_after_id=')[1])
        }
      }) 
    }

    return (
        <Page>
          <Section>
            <SectionHeader title='Currently Available'/>
            <DashBoardButton 
              title='Lessons' 
              count={assignmentData.filter((assignment) => new Date(assignment.data.unlocked_at) < new Date() && assignment.data.started_at === null).length}
            />
            <DashBoardButton 
              title='Reviews' 
              count={assignmentData.filter((assignment) => new Date(assignment.data.available_at) < new Date() && assignment.data.burned_at === null).length}
            />
          </Section>
          <Section>
            <SectionHeader title={`Level ${levelData[levelData.length - 1] ? levelData[levelData.length - 1].data.level : ''} Progress`}/> 
              <SmallHeader title='Radicals'/>   
              <IconGrid>
                {subjectData.filter((subject) => subject.data.level === levelData[levelData.length - 1].data.level && subject.object === "radical").map((subject, index) =>
                  <ProgressTile
                    srsStage={
                      assignmentData.find((assignment) => assignment.data.subject_id === subject.id) ?
                        assignmentData.find((assignment) => assignment.data.subject_id === subject.id).data.srs_stage :
                        null
                    }
                    key={index}
                  >
                    <RadicalIcon
                      id={subject.id}
                      characters={subject.data.characters}
                      navigation={navigation}
                      locked={assignmentData.find((assignment) => assignment.data.subject_id === subject.id) ?
                        new Date(assignmentData.find((assignment) => assignment.data.subject_id === subject.id).data.unlocked_at) > new Date() : true
                      }
                    />
                  </ProgressTile>
                )}
              </IconGrid>      
              <SmallHeader title='Kanji'/>
              <IconGrid>
                {subjectData.filter((subject) => subject.data.level === levelData[levelData.length - 1].data.level && subject.object === "kanji").map((subject, index) =>
                <ProgressTile
                    srsStage={
                      assignmentData.find((assignment) => assignment.data.subject_id === subject.id) ?
                        assignmentData.find((assignment) => assignment.data.subject_id === subject.id).data.srs_stage :
                        null
                    }
                    key={index}
                  >
                    <KanjiIcon
                      id={subject.id}
                      characters={subject.data.characters}
                      navigation={navigation}
                      locked={assignmentData.find((assignment) => assignment.data.subject_id === subject.id) ?
                        new Date(assignmentData.find((assignment) => assignment.data.subject_id === subject.id).data.unlocked_at) > new Date() : true
                      }
                    />                  
                  </ProgressTile>
                )}
              </IconGrid>
          </Section>
          <Section>
            <SectionHeader title='Progress'/>
            <SRCProgressTile
                count={assignmentData.filter((assignment) => assignment.data.srs_stage >= 0 && assignment.data.srs_stage <= 4).length}
                level='Apprentice'
            />
            <SRCProgressTile
                count={assignmentData.filter((assignment) => assignment.data.srs_stage >= 5 && assignment.data.srs_stage <= 6).length}
                level='Guru'
            />
            <SRCProgressTile
                count={assignmentData.filter((assignment) => assignment.data.srs_stage === 7).length}
                level='Master'
            />
            <SRCProgressTile
                count={assignmentData.filter((assignment) => assignment.data.srs_stage === 8).length}
                level='Enlightened'
            />
            <SRCProgressTile
                count={assignmentData.filter((assignment) => assignment.data.srs_stage === 9).length}
                level='Burned'
            />
          </Section>
        </Page>
    )
}

export default DashBoard