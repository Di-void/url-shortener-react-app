import React, { useState, useEffect } from "react";

const SingleLink = ({ original_link, full_short_link2 }) => {
  const [onDisplay, setOnDisplay] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setOnDisplay(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [onDisplay]);
  return (
    <article className="link-box">
      <div className="title">
        <h2>{original_link}</h2>
      </div>
      <div className="short-link-box">
        <h2>{full_short_link2}</h2>

        <button
          className={`copy-btn ${onDisplay && "active"}`}
          onClick={() => {
            setOnDisplay(true);
            navigator.clipboard.writeText(full_short_link2);
          }}
        >
          {onDisplay ? "Copied!" : "Copy"}
        </button>
      </div>
    </article>
  );
};

export default SingleLink;
