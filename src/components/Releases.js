import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { fetchCategory } from "../config/getCategory";
import { fetchAlbumsReleases } from "../config/getAlbum";
import { fetchFeaturedPlayList } from "../config/getFeaturedPlayList";
import Title from "./Title";

import ResourcesRow from "../layouts/ResourcesRow";

const ContainerPrimary = styled.div`
  display: flex;
  flex-direction: column;

  overflow-x: hidden;
  flex-basis: 100%;
`;

const Releases = () => {
  const [searchFeasturedPlaylists, setSearchFeasturedPlaylists] =
    useState(null);
  const [categories, setCategories] = useState(null);
  const [releases, setReleases] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const result = await fetchCategory();
        setCategories(result.data.categories.items);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchNewReleases = async () => {
      try {
        const result = await fetchAlbumsReleases();
        setReleases(result.data.albums.items);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchPlayLists = async () => {
      try {
        const response = await fetchFeaturedPlayList();
        setSearchFeasturedPlaylists(response.data.playlists.items);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCategories();
    fetchNewReleases();
    fetchPlayLists();
  }, []);

  if (!categories || !releases || !searchFeasturedPlaylists) return null;

  return (
    <ContainerPrimary>
      <Title />

      <ResourcesRow
        data={releases}
        maximum={releases.length}
        title="Released this week"
      />
      <ResourcesRow
        data={searchFeasturedPlaylists}
        maximum={searchFeasturedPlaylists.length}
        title="featured PlayLists"
      />
      <ResourcesRow
        maximum={categories.length}
        data={categories}
        title="Browse"
      />
    </ContainerPrimary>
  );
};

export default Releases;
