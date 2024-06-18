export const VIDEO_CATEGORIES = [
  "All",
  "Gaming",
  "Music",
  "Cooking",
  "Cricket",
  "Soccer",
  "Basketball",
];

export const VIDEOS_ENDPOINT =
  `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;

export const API_OPTIONS = {method: 'GET',
headers: {
  Accept: "application/json",
}};


export const EMBED_VIDEO_ENDPOINT = "https://www.youtube.com/embed/";