import { useEffect } from 'react'
import { API_OPTIONS, POPULAR_VIDEOS_ENDPOINT } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addPopularVideos } from '../redux/videoSlice';

const usePopularVideos = () => {
    const dispatch = useDispatch();
    const popularVideos = useSelector(store=>store.videos?.videos);
  useEffect(()=>{
    const fetchVideos = async()=>{
        try {
            const response = await fetch(POPULAR_VIDEOS_ENDPOINT,API_OPTIONS);
        if(!response.ok){
            throw new Error("Unable to fetch Videos");
        }
        const json = await response.json();
        dispatch(addPopularVideos(json.items));
        } catch (error) {
            console.log(error);   
        }
    }
    if(!popularVideos.length){
        fetchVideos();
    }
    
  },[]);
}

export default usePopularVideos