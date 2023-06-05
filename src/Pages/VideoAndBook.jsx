import React from "react";
import { motion } from "framer-motion";
import ReactPlayer from "react-player";
import "../CSS/VideoAndBook.scss";

export default function VideoAndBook() {
  return (
    <div className="VideoAndBook-container">
      <div className="video-wrapper">
        <ReactPlayer
          width="100%"
          height="100%"
          url="https://www.youtube.com/watch?v=Z2Sug_qbF4g"
          controls
          config={{
            youtube: {
              playerVars: { showinfo: 1 },
            },
          }}
        />
      </div>
      <motion.a
        href={"../src/assets/monumenti.pdf"}
        className="visualizePdf-Btn"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
      >
        Visualizza PDF
      </motion.a>
    </div>
  );
}
