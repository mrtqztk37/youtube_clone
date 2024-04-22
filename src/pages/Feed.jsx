import { useContext } from "react";
import SideBar from "../components/SideBar";
import { YoutubeContext } from "../Context/YoutubeContext";
import VideoCard from "../components/VideoCard";
import Loader from "../components/Loader";

const Feed = () => {
  const { videos } = useContext(YoutubeContext);

  return (
    <div className="flex gap-4 cursor-pointer">
      <SideBar />
      <div className="video-layout">
        {!videos ? (
          <Loader />
        ) : (
          videos.map(
            (item, i) =>
              item.type === "video" && <VideoCard key={i} video={item} />
          )
        )}
      </div>
    </div>
  );
};

export default Feed;
