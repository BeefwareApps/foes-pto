import React from "react";

const ImageViewer = ({ src }) => {
  return (
    <div>
      <img src={src} width="100%" height="auto" />
    </div>
  );
};

export default ImageViewer;
