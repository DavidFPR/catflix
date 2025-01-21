import React, { useState } from 'react';

const CreateVideo = ({ isOpen, onClose, categories, onCreate }) => {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [thumbnail, setThumbnail] = useState('');
    const [videoSource, setVideoSource] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onCreate({ title, category, thumbnail, videoSource });
        onClose();
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
                                <option key={cat} value={cat}>{cat}</option>
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