import axios from "axios";

export const fetchMusic = (musicSearch) => {
  let tokenLs = JSON.parse(localStorage.getItem("data"));

  return axios.get(
    `https://api.spotify.com/v1/search?query=${musicSearch}&limit=3&type=track`,
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${tokenLs.access_token}`,
      },
    }
  );
};
