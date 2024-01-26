import React from "react";

const PDFViewer = ({ src }) => {
  return (
    <div>
      <iframe src={src} width="100%" height="1080px" />
    </div>
  );
};

export default PDFViewer;
