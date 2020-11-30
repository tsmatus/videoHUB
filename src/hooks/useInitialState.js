import {useState, useEffect} from 'react'


const [ videos, setVideos] = useState({mylist: [], trends: [], originals: [] })
const useInitialState = (API) => {
  const [ videos, setVideos] = useState({mylist: [], trends: [], originals: [] })

    useEffect(() => {
        fetch(API)
        .then(response => response.json())
        .then(data => setVideos(data))
    }, [])
}

export default useInitialState;