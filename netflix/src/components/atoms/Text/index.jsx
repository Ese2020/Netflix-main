import React from "react";

export const Text = ({ type, children, className }) => {
  if (type === "p") {
    return <p className={className}>{children}</p>;
  }

  if (type === "h1") {
    return <h1 className={className}>{children}</h1>;
  }

  if (type === "h2") {
    return <h2 className={className}>{children}</h2>;
  }

  return <span className={className}>{children}</span>;
};
