import { POPULAR_VIDEOS_ENDPOINT,API_OPTIONS } from "../../utils/constants";
const fetchPopularVideos = async(token)=>{
    try {
        const pageToken = token?`&pageToken=${token}`:"";
        const response = await fetch(`${POPULAR_VIDEOS_ENDPOINT}${pageToken}`,API_OPTIONS);
    if(!response.ok){
        throw new Error("Unable to fetch Videos");
    }
    const json = await response.json();
    return {data:json.items,nextPageToken:json.nextPageToken}
    } catch (error) {
        console.log(error);   
    }
}

export default fetchPopularVideos