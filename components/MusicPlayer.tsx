"use client";

import { useState, useEffect } from "react";
import { Howl } from "howler";
import IconButton from "@mui/material/IconButton";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import Slider from "@mui/material/Slider";

export default function ResponsiveMusicPlayer() {
  const [sound, setSound] = useState<Howl | null>(null);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(1); // 0 a 1

  // Inicializa Howler
  useEffect(() => {
    const howl = new Howl({
      src: ["/audio/audio.mp3"],
      loop: true,
      volume,
    });
    setSound(howl);

    return () => howl.unload();
  }, []);

  // Actualiza volumen
  useEffect(() => {
    if (sound) sound.volume(volume);
  }, [volume, sound]);

  const togglePlay = () => {
    if (!sound) return;
    playing ? sound.pause() : sound.play();
    setPlaying(!playing);
  };

  const toggleMute = () => setVolume(prev => (prev === 0 ? 1 : 0));

  const handleVolume = (_: Event | null, value: number | number[]) => {
    const vol = Array.isArray(value) ? value[0] : value;
    setVolume(vol / 100);
  };

  return (
    <>
      {/* Desktop Player */}
      <div className="hidden md:flex fixed bottom-4 right-4 items-center gap-2 bg-gray-900/70 backdrop-blur-sm rounded-full p-2 shadow-lg z-50">
        <IconButton onClick={togglePlay} className="text-white p-1">
          {playing ? <PauseIcon fontSize="small" /> : <PlayArrowIcon fontSize="small" />}
        </IconButton>

        <IconButton onClick={toggleMute} className="text-white p-1">
          {volume === 0 ? <VolumeOffIcon fontSize="small" /> : <VolumeUpIcon fontSize="small" />}
        </IconButton>

        <Slider
          value={volume * 100}
          onChange={handleVolume}
          max={100}
          step={1}
          size="small"
          sx={{
            width: 80,
            color: "#fff",
            "& .MuiSlider-thumb": { width: 12, height: 12 },
          }}
        />
      </div>

      {/* Mobile Player */}
      <div className="flex md:hidden fixed bottom-0 left-0 right-0 items-center justify-between bg-gray-900/80 backdrop-blur-sm p-3 px-4 z-50">
        <IconButton onClick={togglePlay} className="text-white">
          {playing ? <PauseIcon /> : <PlayArrowIcon />}
        </IconButton>
        {/* El slider en mobile es opcional; puedes eliminarlo si quieres solo play/pausa */}
        {/* <Slider
          value={volume * 100}
          onChange={handleVolume}
          max={100}
          step={1}
          sx={{ color: "#fff", flex: 1, mx: 2 }}
        /> */}
        <IconButton onClick={toggleMute} className="text-white">
          {volume === 0 ? <VolumeOffIcon /> : <VolumeUpIcon />}
        </IconButton>
      </div>
    </>
  );
}
