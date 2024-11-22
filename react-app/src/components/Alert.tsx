import React from "react";

interface AlertProps {
  AlertHandler: () => void;
}

const Alert = ({ AlertHandler }: AlertProps) => {
  return (
    <div className="alert alert-primary alert-dismissible" role="alert">
      Alert Pop Upped{" "}
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
        onClick={AlertHandler}
      >
        {" "}
        <span aria-hidden="true">&times;</span>{" "}
      </button>
    </div>
  );
};

export default Alert;
