import axios from "axios";

axios.defaults.baseURL = "https://yt-api.p.rapidapi.com";

const options = {
  params: { geo: "TR", lang: "tr" },
  headers: {
    "X-RapidAPI-Key": "6af3ef2e3bmsh638aac4d2990866p152bbcjsn18653a7f2192",
    "X-RapidAPI-Host": "yt-api.p.rapidapi.com",
  },
};

export const getData = async (path) => {
  try {
    const response = await axios.get(path, options);

    return response.data;
  } catch (err) {
    console.log(err);
  }
};
