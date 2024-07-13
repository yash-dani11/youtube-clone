import { SEARCH_ENDPOINT, API_OPTIONS } from "./constants";

const searchVideos = async (queryString,token) => {
    try {
        const pageToken = token?`&pageToken=${token}`:"";
        const response = await fetch(`${SEARCH_ENDPOINT}&q=${encodeURIComponent(queryString)}${pageToken}`, API_OPTIONS);
        if (!response.ok) {
          throw new Error("Unable to fetch videos");
        }
        const {items:data,nextPageToken} = await response.json();
        return {data,nextPageToken};
      } catch (error) {
        console.log(error);
      }
}

export default searchVideos