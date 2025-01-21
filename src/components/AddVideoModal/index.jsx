import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
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

const ModalContent = styled.div`
  background: #1e1e1e;
  color: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 80%;
  max-width: 500px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  @media (min-width: 768px) {
    width: 60%;
  }

  @media (min-width: 1024px) {
    width: 40%;
  }
`;

const ModalHeader = styled.h2`
  margin-top: 0;
`;

const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const ModalInput = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background: #333;
  color: #fff;
`;

const ModalButton = styled.button`
  padding: 10px;
  border: none;
  border-radius: 4px;
  background: var(--highlight-text-color);
  color: #fff;
  cursor: pointer;

  &:hover {
    background: #0056b3;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

const ModalSelect = styled.select`
  margin-bottom: 10px;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background: #333;
  color: #fff;
`;

const AddVideoModal = ({ isOpen, onClose }) => {
  const [title, setTitle] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [videoSource, setVideoSource] = useState('');
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/categories') // Ensure this is correct per your flattened db structure
      .then((res) => res.json())
      .then((data) => {
        console.log('Fetched categories:', data); // Debugging line
        setCategories(data);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedCategory = categories.find((cat) => cat.name === category);
    console.log('Selected category:', selectedCategory); // Debugging line

    if (!selectedCategory) {
      console.error('Category not found');
      return;
    }

    const newVideo = {
      title,
      youtubeLink: videoSource,
      youtubeThumb: thumbnail,
      categoryId: selectedCategory.id, // Use the category ID to link the video correctly
    };

    // Update this fetch to use the flattened structure (adjusted API URL)
    fetch(`http://localhost:3000/videos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newVideo),
    }).then(() => {
      onClose();
    });
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>×</CloseButton>
        <ModalHeader>Add New Video</ModalHeader>
        <ModalForm onSubmit={handleSubmit}>
          <ModalInput
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <ModalInput
            type="text"
            placeholder="Thumbnail URL"
            value={thumbnail}
            onChange={(e) => setThumbnail(e.target.value)}
            required
          />
          <ModalInput
            type="text"
            placeholder="Video Source URL"
            value={videoSource}
            onChange={(e) => setVideoSource(e.target.value)}
            required
          />
          <ModalSelect
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="" disabled>Select Category</option>
            {categories.map((cat) => (
              <option key={cat.name} value={cat.name}>{cat.name}</option>
            ))}
          </ModalSelect>
          <ModalButton type="submit">Add Video</ModalButton>
        </ModalForm>
      </ModalContent>
    </ModalOverlay>
  );
};

export default AddVideoModal;
