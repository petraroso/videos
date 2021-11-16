import axios from "axios";
require("dotenv").config();

const KEY = process.env.API_KEY;

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: { part: "snippet", maxResults: 5, key: KEY },
});
