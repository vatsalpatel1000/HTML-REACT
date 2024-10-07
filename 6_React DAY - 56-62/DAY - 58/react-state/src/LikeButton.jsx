import { useState } from "react";

export default function LikeButton(){                       // this is Component
    let [isLiked, setIsLiked] = useState(false);            // this is Hooks        // initialization
    let [clicks, setClicks] = useState(0);

    let toggleLike = () => {
        setIsLiked(!isLiked);
        setClicks(clicks+1);
    };

    let likeStyle = { color : "red" };

    return(
        <div>
            <p> Click = {clicks}</p>
            <p onClick = {toggleLike}>
                { isLiked ? (
                    <i className="fa-solid fa-heart" style = { likeStyle } ></i>
                ) : (
                    <i className="fa-regular fa-heart"></i>
                )}
            </p>
        </div>
    )
}