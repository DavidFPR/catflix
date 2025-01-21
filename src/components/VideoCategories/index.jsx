import { useState, useEffect } from "react";
import VideoCategory from "../VideoCategory";

const VideoCategories = ({ activeCategory, videos }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const filteredCategories = activeCategory === "Todos"
    ? categories
    : categories.filter((category) => category.name === activeCategory);

  return (
    <>
      {filteredCategories.map((category) => {
        const categoryVideos = videos.filter(video => video.categoryId === category.id);
        return <VideoCategory key={category.name} category={category} videos={categoryVideos} />;
      })}
    </>
  );
};

export default VideoCategories;