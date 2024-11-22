import { MouseEvent, useState } from "react";

interface AlertButtonProps {
  name: string;
  onClickHandler: () => void;
  color: string;
}

function AlertButton({ name, onClickHandler, color }: AlertButtonProps) {
  return (
    <button className={`btn btn-${color}`} onClick={onClickHandler}>
      {name}
    </button>
  );
}

export default AlertButton;
