import React, { useState } from 'react';

const CreateVideo = ({ isOpen, onClose, categories, onCreate }) => {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [thumbnail, setThumbnail] = useState('');
    const [videoSource, setVideoSource] = useState('');

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
        };

        // Update the category object with the new video
        const updatedCategory = {
            ...selectedCategory,
            videos: [...selectedCategory.videos, newVideo],
        };

        fetch(`http://localhost:3000/categories/${selectedCategory.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedCategory),
        }).then(() => {
            onClose();
        });
    };

    if (!isOpen) return null;

    return (
        <div className="modal-backdrop">
            <div className="modal">
                <button className="close-button" onClick={onClose}>X</button>
                <h2>Create New Video</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Title</label>
                        <input 
                            type="text" 
                            value={title} 
                            onChange={(e) => setTitle(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label>Category</label>
                        <select 
                            value={category} 
                            onChange={(e) => setCategory(e.target.value)} 
                            required
                        >
                            <option value="">Select Category</option>
                            {categories.map((cat) => (
                                <option key={cat.name} value={cat.name}>{cat.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Thumbnail URL</label>
                        <input 
                            type="text" 
                            value={thumbnail} 
                            onChange={(e) => setThumbnail(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label>Video Source URL</label>
                        <input 
                            type="text" 
                            value={videoSource} 
                            onChange={(e) => setVideoSource(e.target.value)} 
                            required 
                        />
                    </div>
                    <button type="submit">Create Video</button>
                </form>
            </div>
        </div>
    );
};

export default CreateVideo;