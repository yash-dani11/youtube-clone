import { RELATED_ENDPOINT, API_OPTIONS } from "../../utils/constants";

const fetchRelatedVideos = async (videoId,queryString,token) => {
    try {
        const pageToken = token?`&pageToken=${token}`:"";
        const response = await fetch(`${RELATED_ENDPOINT}&q=${encodeURIComponent(queryString)}${pageToken}`, API_OPTIONS);
        if (!response.ok) {
          throw new Error("Unable to fetch videos");
        }
        const {items:data,nextPageToken} = await response.json();
        return {id:videoId,data,nextPageToken};
      } catch (error) {
        console.log(error);
      }
}

export default fetchRelatedVideos