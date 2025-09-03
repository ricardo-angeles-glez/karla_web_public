"use client";

import { useRef, useState } from "react";
import IconButton from "@mui/material/IconButton";
import Slider from "@mui/material/Slider";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(100);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  const handleVolume = (event: Event, newValue: number | number[]) => {
    if (!audioRef.current) return;
    const vol = Array.isArray(newValue) ? newValue[0] : newValue;
    audioRef.current.volume = vol / 100;
    setVolume(vol);
  };

  return (
    <div className="flex items-center justify-center gap-4 bg-gray-900 p-4 rounded-2xl shadow-lg">
      <audio ref={audioRef} src="/audio/audio.mp3" loop />
      
      <IconButton onClick={togglePlay} className="text-white">
        {playing ? <PauseIcon /> : <PlayArrowIcon />}
      </IconButton>

      <div className="flex items-center gap-2 w-32">
        <IconButton
          onClick={() => handleVolume({}, volume === 0 ? 100 : 0)}
          className="text-white"
        >
          {volume === 0 ? <VolumeOffIcon /> : <VolumeUpIcon />}
        </IconButton>
        <Slider
          value={volume}
          onChange={handleVolume}
          aria-labelledby="volume-slider"
          sx={{ color: "#fff" }}
        />
      </div>
    </div>
  );
}
