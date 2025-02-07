import { useRef, useState } from 'react';

const VideoBackground = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleVideo = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative h-screen">
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        muted
        loop
        src="public/bs.mp4" // replace with your video URL
      ></video>
      
      <button
        onClick={toggleVideo}
        className="absolute inset-0 m-auto   text-white   text-lg font-semibold"
        style={{ zIndex: 10 }}
      >
       <span className='bg-slate-400 text-black rounded  px-4 py-1'> {isPlaying ? 'Pause' : 'Start'}</span>
      </button>
    </div>
  );
};

export default VideoBackground;
