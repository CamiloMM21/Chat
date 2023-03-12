import React, { useState } from "react";

function FileButton() {
  const [fileContent, setFileContent] = useState("");

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      setFileContent(event.target.result);
    };
    reader.readAsText(file);
  };



  return (
    <div>
      <input type="file" onChange={handleFileSelect} />
      <p>Contenido del archivo:</p>
      <pre></pre>
    </div>
  );
}

export default FileButton;
