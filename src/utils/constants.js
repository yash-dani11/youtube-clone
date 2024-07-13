export const VIDEO_CATEGORIES = [
  "All",
  "Videos",
  "Gaming",
  "Music",
  "Shorts",
  "Live",
  "Unwatched",
  "Recently Uploaded",
  "Trailers",
  "Sports",
  "Cricket",
];

export const POPULAR_VIDEOS_ENDPOINT =
  `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&chart=mostPopular&maxResults=15&regionCode=US&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;

export const CHANNEL_ENDPOINT = `https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;

export const COMMENTS_ENDPOINT = `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`

export const SEARCH_ENDPOINT = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&regionCode=US&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;

export const API_OPTIONS = {method: 'GET',
headers: {
  Accept: "application/json",
}};

export const VIDEO_ENDPOINT = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`

export const EMBED_VIDEO_ENDPOINT = "https://www.youtube.com/embed/";

export const WHATSAPP_SHARE_ENDPOINT = "https://api.whatsapp.com/send?text=";

export const AUTO_COMPLETE_API = "http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&q=";