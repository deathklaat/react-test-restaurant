import { useState, useRef } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

import { meal } from '../../constants';
import './Intro.css';

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = useRef();

  const onVideoClick = () => {
    setPlayVideo(!playVideo);
    playVideo ? vidRef.current.pause() : vidRef.current.play();
  };

  return (
    <div className="app__video">
      <video
        ref={vidRef}
        src={meal}
        type="video/mp4"
        loop
        controls={false}
        muted
      />
      <div className={playVideo ? 'app__video-overlay app__video-overlay--half flex__center' : 'app__video-overlay flex__center'}>
        <div
          className="app__video-overlay_circle flex__center"
          onClick={onVideoClick}
        >
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;