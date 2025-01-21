import { useEffect, useState } from "react";
import styled from "styled-components";
import VideoCard from "./VideoCard"; // Assuming you have a VideoCard component

const CategorySection = styled.section`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const CategoryChip = styled.div`
  color: var(--main-text-color);
  background-color: ${(props) => props.$bgColor || "#ff80ab"};
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  margin: 20px 0;
`;

const VideoSwiper = styled.div`
  display: flex;
  width: 100%;
  max-height: 250px;
  overflow-y: hidden;
  overflow-x: scroll;
  gap: 18px;
`;

const VideoCategory = () => {
  const [categories, setCategories] = useState([]);

  // Fetch categories from json-server
  useEffect(() => {
    fetch("http://localhost:3000/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  return (
    <>
      {categories
        .filter((category) => category.videos && category.videos.length > 0)
        .map((category) => (
          <CategorySection key={category.name}>
            <CategoryChip $bgColor={category.color}>
              <h2>{category.name}</h2>
            </CategoryChip>
            <VideoSwiper>
              {category.videos.map((video, index) => (
                <VideoCard key={index} video={video} $borderColor={category.color} $titleColor={category.color}/> 
              ))}
            </VideoSwiper>
          </CategorySection>
        ))}
    </>
  );
};

export default VideoCategory;
