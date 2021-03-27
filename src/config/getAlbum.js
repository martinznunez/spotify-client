import axios from "axios";

import { getLocalStorage } from "../utils/LocalStotage";

export const fetchAlbumsReleases = () => {
  const { tokenLs } = getLocalStorage();

  return axios.get("	https://api.spotify.com/v1/browse/new-releases", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${tokenLs.access_token}`,
    },
  });
};
