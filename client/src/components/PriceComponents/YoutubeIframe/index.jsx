
import React from 'react';
import PropTypes from 'prop-types';
import styles from './YoutubeIframe.module.sass';

const YouTubeIframe = ({ videoId, start }) => (
  <div className={styles.videoContainer}>
    <iframe
      className={styles.packageVideo}
      width="340"
      height="191"
      src={`https://www.youtube.com/embed/${videoId}?start=${start}`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  </div>
);

YouTubeIframe.propTypes = {
  videoId: PropTypes.string.isRequired,
  start: PropTypes.number,
};

YouTubeIframe.defaultProps = {
  start: 0,
};

export default YouTubeIframe;
