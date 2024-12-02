import React from "react";

function ProgressBar({ progress }) {
  return (
    <div
      style={{
        width: "100%",
        marginBottom: "10px",
        backgroundColor: "#e0e0e0",
        borderRadius: "5px",
      }}
    >
      <div
        style={{
          width: `${progress}% `,
          height: "10px",
          backgroundColor: "#76c7c0",
          borderRadius: "5px",
        }}
      />
    </div>
  );
}

export default ProgressBar;
