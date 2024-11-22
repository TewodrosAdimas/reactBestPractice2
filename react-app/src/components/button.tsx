import { MouseEvent, useState } from "react";

interface ButtonProps {
  name: string;
}

function Button({ name }: ButtonProps) {
  return (
    <button type="button" className="btn btn-primary">
      {name}
    </button>
  );
}

export default Button;
