import {useEffect} from 'react'
import { CHANNEL_ENDPOINT,API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addChannelInfo } from '../redux/channelSlice';

const useChannelInfo = (channelId) => {
    const channelInfo = useSelector(state=>state.channel?.channelInfo?.[channelId]);
    const dispatch = useDispatch();
    useEffect(()=>{
        const fetchChannelInfo = async()=>{
            try {
            const response = await fetch(`${CHANNEL_ENDPOINT}&id=${channelId}`,API_OPTIONS);
            if(!response.ok){
                throw new Error("Unable to fetch Channel Info");
            }
            const json = await response.json();
            dispatch(addChannelInfo({id:channelId,data:json}));
            } catch (error) {
                console.log(error);   
            }
        }
        if(!channelInfo){
            fetchChannelInfo();
        }
        
      },[channelId]);
}

export default useChannelInfo