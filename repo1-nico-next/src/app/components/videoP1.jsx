
import styles from './VideoPlayer.module.css';

const VideoPlayerp1 = ({ videoSrc }) => {
  return (
    
    <div className={styles.videoContainer}>
      <video autoPlay loop className={styles.video} controls>
        <source src={videoSrc} type="video/mp4" />
        Tu navegador no admite la reproducción de video.
      </video>
    </div>
    
  );
};

export default VideoPlayerp1;
