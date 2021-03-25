import axios from "axios";

export const fetchCategory = () => {
  let tokenLs = JSON.parse(localStorage.getItem("data"));

  return axios.get("https://api.spotify.com/v1/browse/categories", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${tokenLs.access_token}`,
    },
  });
};
