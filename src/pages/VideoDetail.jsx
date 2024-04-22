import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { getData } from "./../utils/getData";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import millify from "millify";
import StringArea from "../components/StringArea";
import Loader from "./../components/Loader";
import VideoCard from "./../components/VideoCard";
import Comments from "./Comments";

const VideoDetail = () => {
  const [video, setVideo] = useState(null);
  const [comments, setComment] = useState(null);
  const [searchParams] = useSearchParams();

  const id = searchParams.get("v");

  useEffect(() => {
    setVideo(null);
    getData(`/video/info?id=${id}&extend=1`).then((data) => setVideo(data));
    getData(`/comments?id=${id}`).then((res) => setComment(res.data));
  }, [id]);

  console.log("video", video);

  return (
    <div className=" detail-page p-5 h-screen overflow-auto w-full m-w-none">
      <div className="flex flex-col mx-3 ">
        <ReactPlayer
          className="rounded-lg"
          width={"100%"}
          height={"60vh"}
          controls
          playing
          url={`https://www.youtube.com/watch?v=${id}`}
        />
        {!video || !comments ? (
          <p>yükleniyor. . .</p>
        ) : (
          <>
            <h1 className="mt-3 text-lg cursor-pointer">{video.title}</h1>
            <div className="flex justify-between">
              {/* sol */}
              <div className="flex items-center gap-4 w-full-none">
                <img
                  className="rounded-full w-10 h-10"
                  src={
                    video.channelThumbnail[video.channelThumbnail.length - 1]
                      .url
                  }
                />
                <div className="cursor-pointer">
                  <h4 className="font-bold">{video.channelTitle}</h4>
                  <p className="text-gray-400 text-sm">
                    {video.subscriberCountText}
                  </p>
                </div>
                <button className="bg-white rounded-full text-black px-3 h-6 transition hover:bg-gray-400">
                  Abone Ol
                </button>
              </div>
              {/* sağ */}
              <div className="flex items-center bg-[#272727] cursor-pointer rounded-full w-full-none">
                <div className="flex items-center gap-3 py-2 px-2 border-r">
                  <AiFillLike />
                  <p>{video.likeCount}</p>
                </div>
                <div className="py-2 px-4">
                  <AiFillDislike />
                </div>
              </div>
              <link
                rel="alternate"
                href="atom.xml"
                type="application/atom+xml"
                title="Atom"
              />
            </div>

            <div className=" flex flex-col  bg-[#272727] rounded p-2 mt-4 cursor-pointer hover:bg-opacity-80 font-sm">
              <div className="flex gap-2 ">
                <p>{millify(video.viewCount)}</p>görüntülenme
                <p>{new Date(video.publishDate).toLocaleDateString()}</p>
              </div>
              <div className=" text-sm max-sm:text-xs">
                <StringArea text={video.description} />
              </div>
              <div>
                <Comments data={comments} />
              </div>
            </div>
          </>
        )}
      </div>
      <div className="flex flex-col gap-5 max-w-none w-full-none rounded-lg w-[40] h-[20] ">
        {!video ? (
          <Loader />
        ) : (
          video.relatedVideos.data.map(
            (item) =>
              item.type === "video" && <VideoCard isRow={true} video={item} />
          )
        )}
      </div>
    </div>
  );
};

export default VideoDetail;
