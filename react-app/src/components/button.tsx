import { MouseEvent, useState } from "react";

interface ButtonProps {
  name: string;
  onClickHandler: () => void;
  color: string;
}

function Button({ name, onClickHandler, color }: ButtonProps) {
  return (
    <button className={`btn btn-${color}`} onClick={onClickHandler}>
      {name}
    </button>
  );
}

export default Button;
