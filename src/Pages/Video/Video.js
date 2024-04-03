import React from "react";
import "./Video.css"
import PlayVideos from "../../Components/PlayVideo/PlayVideo";
import Recomended from "../../Components/recommended/recommendvideos";
import { useParams } from "react-router-dom";

const Video = () => {
    const {videoId, categoryId}=useParams();
    return (
        <div className="play-container">
            <PlayVideos videoId={videoId}/>
            <Recomended categoryId={categoryId}/>
        </div>
    )
}
export default Video