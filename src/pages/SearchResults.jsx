import { useSearchParams } from "react-router-dom";
import SideBar from "../components/SideBar";
import { useEffect, useState } from "react";
import { getData } from "../utils/getData";
import Loader from "../components/Loader";
import VideoCard from "../components/VideoCard";

const SearchResults = () => {
  const [results, setResults] = useState(null);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search_query");

  useEffect(() => {
    setResults(null);
    getData(`/search?query=${query}&type=video`).then((data) =>
      setResults(data)
    );
  }, [query]);
  return (
    <div className="flex  gap-4 p-3  h-screen overflow-auto  ">
      <SideBar />
      <div>
        <p className="text-lg">{query} için sonuçlar </p>
        {!results ? (
          <Loader />
        ) : (
          results.data.map(
            (item) =>
              item.type === "video" && <VideoCard isRoww={true} video={item} />
          )
        )}
      </div>
    </div>
  );
};

export default SearchResults;
