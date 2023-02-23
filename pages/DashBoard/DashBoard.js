import { API_KEY } from '@env';
import Axios from 'axios';
import { useEffect, useState } from 'react';
import Page from '../../components/Page';
import ProgressTile from './components/ProgressTile';

function DashBoard() {
    const [burnedData, setBurnedData] = useState([])
    const [enlightenedData, setEnlightenedData] = useState([])
    const [masterData, setMasterData] = useState([])
    const [guruData, setGuruData] = useState([])
    const [apprenticeData, setApprenticeData] = useState([])

    useEffect(() => {
      Axios.get("https://api.wanikani.com/v2/assignments", {
            headers: {
                "Content-Type": "application/json",
                "Wanikani-Revision": "20170710",
                "Authorization": `Bearer ${API_KEY}`
            },
            params: {
                srs_stages: [9].reduce((f, s) => `${f},${s}`)
            },
            }).then((response) => {
              setBurnedData(response.data.data)
          }) 
    }, [])

    useEffect(() => {
        Axios.get("https://api.wanikani.com/v2/assignments", {
              headers: {
                  "Content-Type": "application/json",
                  "Wanikani-Revision": "20170710",
                  "Authorization": `Bearer ${API_KEY}`
              },
              params: {
                srs_stages: [8].reduce((f, s) => `${f},${s}`)
              },
              }).then((response) => {
                setEnlightenedData(response.data.data)
            }) 
      }, [])

      useEffect(() => {
        Axios.get("https://api.wanikani.com/v2/assignments", {
              headers: {
                  "Content-Type": "application/json",
                  "Wanikani-Revision": "20170710",
                  "Authorization": `Bearer ${API_KEY}`
              },
              params: {
                srs_stages: [7].reduce((f, s) => `${f},${s}`)
              },
              }).then((response) => {
                setMasterData(response.data.data)
            }) 
      }, [])

      useEffect(() => {
        Axios.get("https://api.wanikani.com/v2/assignments", {
              headers: {
                  "Content-Type": "application/json",
                  "Wanikani-Revision": "20170710",
                  "Authorization": `Bearer ${API_KEY}`
              },
              params: {
                srs_stages: [5,6].reduce((f, s) => `${f},${s}`)
              },
              }).then((response) => {
                setGuruData(response.data.data)
            }) 
      }, [])

      useEffect(() => {
        Axios.get("https://api.wanikani.com/v2/assignments", {
              headers: {
                  "Content-Type": "application/json",
                  "Wanikani-Revision": "20170710",
                  "Authorization": `Bearer ${API_KEY}`
              },
              params: {
                srs_stages: [1,2,3,4].reduce((f, s) => `${f},${s}`)
              },
              }).then((response) => {
                setApprenticeData(response.data.data)
            }) 
      }, [])
  
    return (
        <Page>
            <ProgressTile
                count={apprenticeData.length}
                level='Apprentice'
            />
            <ProgressTile
                count={guruData.length}
                level='Guru'
            />
            <ProgressTile
                count={masterData.length}
                level='Master'
            />
            <ProgressTile
                count={enlightenedData.length}
                level='Enlightened'
            />
            <ProgressTile
                count={burnedData.length}
                level='Burned'
            />
        </Page>
    )
}

export default DashBoard