import { useEffect, useState } from 'react';
import styled from 'styled-components';
import VideoCard from './VideoCard'; // Assuming you have a VideoCard component

const CategorySection = styled.section`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
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
`;

const VideoSwiper = styled.div`
  display: flex;
  width: 100%;
  max-height: 250px;
  overflow-y: hidden;
  overflow-x: scroll;
  gap: 18px;
`;

const VideoCategory = ({ category }) => {
  return (
    <CategorySection>
      <CategoryChip style={{ backgroundColor: category.color }}>
        <h2>{category.name}</h2>
      </CategoryChip>
      <VideoSwiper>
        {category.videos.map((video) => (
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
