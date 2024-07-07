import { useEffect } from "react";
import { API_OPTIONS, VIDEO_ENDPOINT } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addVideo } from "../redux/videoSlice";
const useVideo = (id) => {
  const dispatch = useDispatch();
  const allVideos = useSelector((store) => store.videos?.videos?.all);
  const requestedVideo = allVideos?.[id];
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(`${VIDEO_ENDPOINT}&id=${id}`, API_OPTIONS);
        if (!response.ok) {
          throw new Error("Unable to fetch the video");
        }
        const json = await response.json();
        dispatch(addVideo({ id, data: json?.items[0]}));
      } catch (error) {
        console.log(error);
      }
    };
    if (!requestedVideo) {
      fetchVideos();
    }
  }, [id]);
};

export default useVideo;
