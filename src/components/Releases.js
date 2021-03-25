import React, { useEffect, useState } from "react";
import styled from "styled-components";
import LogOut from "./LogOut";

import { fetchCategory } from "../config/getCategory";
import { fetchAlbumsReleases } from "../config/getAlbum";
import { fetchFeaturedPlayList } from "../config/getFeaturedPlayList";
import Title from "./Title";

import ResourcesRow from "../layouts/ResourcesRow";

const ContainerPrimary = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
`;

const ContainerReleases = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const Releases = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeRelease, setActiveRelease] = useState(0);
  const [activeFeaturePlayLists, setActiveFeaturePlayLists] = useState(0);

  const [searchFeasturedPlaylists, setSearchFeasturedPlaylists] = useState(
    null
  );
  const [categories, setCategories] = useState(null);
  const [releases, setReleases] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      const result = await fetchCategory();
      setCategories(result.data.categories.items);
    };

    const fetchNewReleases = async () => {
      const result = await fetchAlbumsReleases();
      setReleases(result.data.albums.items);
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
    <>
      <ContainerPrimary>
        <Title />
        <ContainerReleases>
          <LogOut />
          <ResourcesRow
            data={releases[activeRelease]}
            maximum={releases}
            title="Released this week"
            activeItem={activeRelease}
            setActiveItem={setActiveRelease}
          />
          <ResourcesRow
            maximum={searchFeasturedPlaylists}
            data={searchFeasturedPlaylists[activeFeaturePlayLists]}
            title="featured PlayLists"
            activeItem={activeFeaturePlayLists}
            setActiveItem={setActiveFeaturePlayLists}
          />
          <ResourcesRow
            maximum={categories}
            data={categories[activeCategory]}
            title="Browse"
            activeItem={activeCategory}
            setActiveItem={setActiveCategory}
          />
        </ContainerReleases>
      </ContainerPrimary>
    </>
  );
};

export default Releases;