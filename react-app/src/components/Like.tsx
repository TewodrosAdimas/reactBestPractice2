import React from "react";
import { AiOutlineLike } from "react-icons/ai";

interface LikeProps {
  LikeHandler: () => void;
}

const Like = ({ LikeHandler }: LikeProps) => {
  return (
    <div>
      <AiOutlineLike size={50} onClick={LikeHandler} />
    </div>
  );
};

export default Like;
