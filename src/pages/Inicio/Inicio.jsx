import { useState, useEffect } from 'react';
import styled from 'styled-components';
import FooterNav from '../../components/FooterNav';
import NavBar from '../../components/NavBar';
import ChipContainer from '../../components/ChipContainer';
import VideoCategories from '../../components/VideoCategories';

const MainContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: auto;
  padding: 10vh 18px;
  overflow: scroll;

  @media (min-width: 1024px) {
    overflow: hidden;
  }
`;

const Inicio = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/DavidFPR/catflix-api/videos')
      .then((res) => res.json())
      .then((data) => setVideos(data));
  }, []);

  const handleVideoAdded = (newVideo) => {
    setVideos((prevVideos) => [...prevVideos, newVideo]);
  };

  return (
    <>
      <NavBar onVideoAdded={handleVideoAdded} />
      <MainContainer>
        <ChipContainer
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <VideoCategories activeCategory={activeCategory} videos={videos} />
      </MainContainer>
      <FooterNav onVideoAdded={handleVideoAdded} />
    </>
  );
};

export default Inicio;