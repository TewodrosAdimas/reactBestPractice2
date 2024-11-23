import React, { useState } from "react";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";

const LikeButton: React.FC = () => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked((prevState) => !prevState);
    console.log("clicked");
  };

  return (
    <button
      onClick={toggleLike}
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        fontSize: "50px",
      }}
    >
      {liked ? <AiFillLike /> : <AiOutlineLike />}
    </button>
  );
};

export default LikeButton;
