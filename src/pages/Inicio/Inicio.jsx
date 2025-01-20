import styled from 'styled-components';
import FooterNav from '../../components/FooterNav'
import NavBar from '../../components/NavBar';
import VideoCategory from '../../components/VideoCategory';
import ChipContainer from '../../components/ChipContainer';

const MainContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: auto;
  padding: 10vh 18px;
  overflow: scroll;
`;

const Inicio = () => {
  return (
    <>
      <NavBar />
      <MainContainer>
        <ChipContainer />
        <VideoCategory />
        <VideoCategory />
        <VideoCategory />
      </MainContainer>
      <FooterNav />
    </>
  );
};

export default Inicio;
