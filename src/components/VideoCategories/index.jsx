import { useState, useEffect } from "react";
import VideoCategory from "../VideoCategory";

const VideoCategories = ({ activeCategory }) => {
    const [categories, setCategories] = useState([]);
  
    // Fetch categories on mount
    useEffect(() => {
      fetch("http://localhost:3000/categories")
        .then((res) => res.json())
        .then((data) => setCategories(data));
    }, []);
  
    // Filter categories based on active category
    const filteredCategories = activeCategory === "Todos"
      ? categories // Show all categories
      : categories.filter((category) => category.name === activeCategory);
  
    return (
      <>
        {filteredCategories.map((category) => (
          <VideoCategory key={category.name} category={category} />
        ))}
      </>
    );
  };
  
  export default VideoCategories;
  