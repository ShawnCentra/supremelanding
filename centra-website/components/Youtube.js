import React, { useRef } from "react";
import PropTypes from "prop-types";
import useIntersectionObserver from "@react-hook/intersection-observer";

const YoutubeEmbed = ({ embedId, width, height, style, whySupremeSection }) => {
  const containerRef = useRef();
  const lockRef = useRef(false);
  const { isIntersecting } = useIntersectionObserver(containerRef);
  if (isIntersecting) {
    lockRef.current = true;
  }
  return (
    <div ref={containerRef} className={whySupremeSection ? `video-responsive video-responsive-supreme youtubeContainer`:`video-responsive youtubeContainer`}>
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
