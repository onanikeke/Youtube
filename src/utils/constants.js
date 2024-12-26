const YOUTUBE_API_KEY = "AIzaSyB7Gtr7c3WiU-Khk9WcZOpc0rzhcmqgTX4";
export const YOUTUBE_VIDEO_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  YOUTUBE_API_KEY;

export const YOUTUBE_SEARCH_URL =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_KEYWORD_SEARCH =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=&key=" +
  YOUTUBE_API_KEY;
