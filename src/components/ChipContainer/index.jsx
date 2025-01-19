import { Chip } from '@mui/material';
import styled from 'styled-components';

const ChipContainerStyled = styled.section`
  display: flex;
  width: 100%;
  gap: 12px;
  overflow: scroll;
`;

const ChipContainer = () => {
  return (
    <ChipContainerStyled>
      <Chip label="categoria" color="primary" />
      <Chip label="categoria" color="secondary" />
      <Chip label="categoria" color="primary" />
      <Chip label="categoria" color="success" />
      <Chip label="categoria" color="secondary" />
    </ChipContainerStyled>
  );
};

export default ChipContainer;
