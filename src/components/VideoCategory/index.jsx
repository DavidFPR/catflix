import styled from 'styled-components';
import { useEffect, useState } from 'react';
import VideoCard from './VideoCard'; // Assuming you have a VideoCard component

const CategorySection = styled.section`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 1024px) {
    margin: 50px 24px;
  }
`;

const CategoryChip = styled.div`
  color: var(--main-text-color);
  background-color: ${(props) => props.$bgColor || '#ff80ab'};
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  margin: 20px 0;
  
  @media (min-width: 1024px) {
    margin: 30px 0;
  }
`;

const VideoSwiper = styled.div`
  display: flex;
  width: 100%;
  max-height: 250px;
  overflow-y: hidden;
  overflow-x: scroll;
  gap: 18px;

  @media (min-width: 1024px) {
    flex-wrap: wrap;
    overflow-x: hidden;
    gap: 48px;
    max-height: none;
    justify-content: flex-start;
  }
`;

const VideoCategory = ({ category }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // Fetch the videos and filter by categoryId
    fetch('http://localhost:3000/videos')
      .then((res) => res.json())
      .then((data) => {
        const filteredVideos = data.filter((video) => video.categoryId === category.id);
        setVideos(filteredVideos);
      });
  }, [category.id]); // Ensure this updates whenever category changes

  return (
    <CategorySection>
      {videos.length > 0 && (
        <CategoryChip style={{ backgroundColor: category.color }}>
          <h2>{category.name}</h2>
        </CategoryChip>
      )}
      <VideoSwiper>
        {videos.map((video) => (
          <VideoCard
            key={video.youtubeLink}
            video={video}
            categoryColor={category.color}
          />
        ))}
      </VideoSwiper>
    </CategorySection>
  );
};

export default VideoCategory;
