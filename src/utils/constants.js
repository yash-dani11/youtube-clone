export const VIDEO_CATEGORIES = [
  "All",
  "Gaming",
  "Music",
  "Cooking",
  "Cricket",
  "Soccer",
  "Basketball",
];

export const POPULAR_VIDEOS_ENDPOINT =
  `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;

export const CHANNEL_ENDPOINT = `https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;

export const COMMENTS_ENDPOINT = `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`

export const API_OPTIONS = {method: 'GET',
headers: {
  Accept: "application/json",
}};

export const VIDEO_ENDPOINT = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`

export const EMBED_VIDEO_ENDPOINT = "https://www.youtube.com/embed/";

export const WHATSAPP_SHARE_ENDPOINT = "https://api.whatsapp.com/send?text=";