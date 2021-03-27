import axios from "axios";
import { getLocalStorage } from "../utils/LocalStotage";

export const fetchFeaturedPlayList = () => {
  const { tokenLs } = getLocalStorage();

  return axios.get("https://api.spotify.com/v1/browse/featured-playlists", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${tokenLs.access_token}`,
    },
  });
};
