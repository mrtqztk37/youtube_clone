import millify from "millify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const VideoCard = ({ video, isRow, isRoww }) => {
  const navigate = useNavigate();
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={() => navigate(`/watch?v=${video.videoId}`)}
      className={`cursor-pointer flex flex-col ${isRow && "flex gap-2"} ${
        isRoww &&
        "max-sm:flex max-sm:flex-col max-2xl:flex-row  cursor-pointer mt-2 gap-2  "
      }`}
    >
      <div>
        <img
          className={`flex max-w-none rounded-lg gap-4 mt-1 w-[100%] h-100  ${
            isRow && "w-[full] h-[full] "
          } ${
            isRoww &&
            "flex  gap-3  w-full-none w-[500px] h-[281px] mt-5 max-sm:h-[200px] max-sm:w-[400px]  "
          }`}
          src={
            isHover && video.richThumbnail
              ? video.richThumbnail[video.richThumbnail.length - 1].url
              : video.thumbnail[video.thumbnail.length - 1].url
          }
        />
      </div>
      <div>
        <img
          className={`rounded-full w-10 h-10 ${isRow && "hidden max-w-0 "} ${
            isRoww && "max-sm:hidden max-2xl:mt-6 "
          } `}
          src={video.channelThumbnail ? video.channelThumbnail[0].url : "err"}
        />
        <div className="text-[#aaa] text-sm ">
          <h4
            className={`font-bold text-white line-clamp-2 ${
              isRow && "line-clamp-1"
            } `}
          >
            {" "}
            {video.title}
          </h4>
          <p>{video.channelTitle}</p>
          <div className="flex gap-2 line-clamp-1">
            <p className="text-xs">{millify(video.viewCount)} görüntülenme</p>
            <p className="text-xs">{video.publishedTimeText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default VideoCard;
