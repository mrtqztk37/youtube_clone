// 1-context temeli oluştur

import { createContext, useEffect, useState } from "react";
import { categories } from "../components/constants";
import { getData } from "../utils/getData";

export const YoutubeContext = createContext();

// 2-context'de tutulan verileri uygulamaya aktarıcak

export const YoutubeProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);
    selectedCategory.type === "home" || selectedCategory.type === "trending"
      ? getData(`/${selectedCategory.type}`).then((data) =>
          setVideos(data.data)
        )
      : Error;
    if (selectedCategory.type === "category") {
      getData(`/search?query=${selectedCategory.name}`).then((data) =>
        setVideos(data.data)
      );
    }
  }, [selectedCategory]);

  return (
    <YoutubeContext.Provider
      value={{ selectedCategory, setSelectedCategory, videos }}
    >
      {children}
    </YoutubeContext.Provider>
  );
};
