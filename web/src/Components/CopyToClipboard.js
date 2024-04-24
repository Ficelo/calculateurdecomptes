import React from "react";
import "./CopyToClipBoard.css";

function CopyToClipboard({ text }) {
  const copyToClipboard = () => {
    const textarea = document.createElement("textarea");
    textarea.value = text;

    textarea.style.position = "fixed";
    textarea.style.opacity = 0;

    document.body.appendChild(textarea);

    textarea.select();
    document.execCommand("copy");

    document.body.removeChild(textarea);
  };

  return (
    <div id="button-copy-container">
      <div onClick={copyToClipboard} id="button-copy"></div>
    </div>
  );
}

export default CopyToClipboard;
