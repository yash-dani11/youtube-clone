import { COMMENTS_ENDPOINT, API_OPTIONS } from "../../utils/constants";
const fetchComments = async (videoId,token) => {
  try {
    const pageToken = token?`&pageToken=${token}`:"";
    const response = await fetch(
      `${COMMENTS_ENDPOINT}&videoId=${videoId}${pageToken}`,
      API_OPTIONS
    );
    if (!response.ok) {
      throw new Error("Unable to fetch Videos");
    }
    const{nextPageToken ,items:data} = await response.json();
    return {id:videoId,nextPageToken,data};
  } catch (e) {
    console.log(e);
  }
}

export default fetchComments;