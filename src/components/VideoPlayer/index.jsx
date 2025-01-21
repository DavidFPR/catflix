import React, { useState } from 'react';
import styled from 'styled-components';

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const VideoContainer = styled.div`
  position: relative;
  width: 80%;
  height: 80%;
  background: #000;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
`;

const VideoPlayer = ({ videoId, onClose }) => {
  return (
    <Modal onClick={onClose}>
      <VideoContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>×</CloseButton>
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Video Player"
        ></iframe>
      </VideoContainer>
    </Modal>
  );
};

export default VideoPlayer;