import axios from "axios";
import { getLocalStorage } from "../utils/LocalStotage";

export const fetchMusic = (musicSearch) => {
  const { tokenLs } = getLocalStorage();

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
