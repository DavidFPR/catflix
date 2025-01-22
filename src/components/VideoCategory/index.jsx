import styled from 'styled-components';
import { useEffect, useState } from 'react';
import VideoCard from './VideoCard'; // Assuming you have a VideoCard component

const CategorySection = styled.section`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 1024px) {

    margin: 0 0 15vh 0;
    justify-content: center;
    align-items: center;
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
  min-width: fit-content;
  margin: 20px 0;
  padding: 0 12px;
  
  @media (min-width: 1024px) {
    margin: 10vh 0;
    width: 90%;
    padding: 0;
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
    justify-content: space-between;
    width: 90%;
  }
`;

const VideoCategory = ({ category, videos }) => {
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