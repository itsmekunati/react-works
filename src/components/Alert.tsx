import React, { ReactNode } from "react";

interface props {
  children: ReactNode;
  onClose: () => void;
}
const Alert = ({ children, onClose }: props) => {
  return (
    <div
      className="alert alert-warning alert-dismissible fade show"
      role="alert"
    >
      Alert! {children}
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};

export default Alert;
