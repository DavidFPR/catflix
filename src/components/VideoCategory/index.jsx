import styled from 'styled-components';
import VideoCard from './VideoCard';

const CategorySection = styled.section`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const CategoryChip = styled.div`
  color: var(--main-text-color);
  background-color: #ff80ab;
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
  return (
    <CategorySection>
      <CategoryChip>
        <h2>Categoria</h2>
      </CategoryChip>
      <VideoSwiper>
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </VideoSwiper>
    </CategorySection>
  );
};

export default VideoCategory;
