import axios from "axios";

export const fetchAlbumsReleases = () => {
  let tokenLs = JSON.parse(localStorage.getItem("data"));

  return axios.get("	https://api.spotify.com/v1/browse/new-releases", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${tokenLs.access_token}`,
    },
  });
};
