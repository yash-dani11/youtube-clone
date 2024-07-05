import {useEffect} from 'react'
import { addComments } from '../redux/commentsSlice';
import { useSelector,useDispatch } from 'react-redux';
import { API_OPTIONS, COMMENTS_ENDPOINT } from '../utils/constants';
const useComments = (id) => {
    const comment = useSelector(state=>state.comments?.videoComments?.[id]);
    const dispatch = useDispatch();
    useEffect(()=>{
        const fetchComments = async()=>{
            try {
            const response = await fetch(`${COMMENTS_ENDPOINT}&videoId=${id}`,API_OPTIONS);
            if(!response.ok){
                throw new Error("Unable to fetch Videos");
            }
            const json  = await response.json();
            dispatch(addComments({id,data:json.items}))
        }catch(e){
            console.log(e);
        }
    }
        if(!comment){
            fetchComments();
        }
    },[id]);
    
}

export default useComments