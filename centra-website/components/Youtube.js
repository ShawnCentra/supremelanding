import React, { useRef } from "react";
import PropTypes from "prop-types";
import useIntersectionObserver from "@react-hook/intersection-observer";

const YoutubeEmbed = ({ embedId, width, height, style }) => {
  const containerRef = useRef();
  const lockRef = useRef(false);
  const { isIntersecting } = useIntersectionObserver(containerRef);
  if (isIntersecting) {
    lockRef.current = true;
  }
  return (
    <div ref={containerRef} className={`video-responsive youtubeContainer`}>
      {lockRef.current && (
        <iframe
          width="100%"
          height="100%"
          src={`${embedId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      )}
    </div>
  );
};

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
