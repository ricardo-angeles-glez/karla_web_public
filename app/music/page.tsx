import { Header } from "../../components/Header";
import Image from "next/image";

const albums = [
  {
    title: "Oh Yes She Knows",
    year: "2023",
    type: "Single",
    cover: "/video-2.jpg",
    tracks: [
      { title: "Oh Yes She Knows", duration: "3:45" },
    ]
  },
  {
    title: "Midnight Whispers",
    year: "2022",
    type: "Album",
    cover: "/project-1.jpg",
    tracks: [
      { title: "Intro", duration: "1:20" },
      { title: "Midnight Whispers", duration: "4:15" },
      { title: "Silent Echoes", duration: "3:50" },
      { title: "Dreamwalker", duration: "4:30" },
    ]
  },
  {
    title: "Electric Dreams",
    year: "2021",
    type: "EP",
    cover: "/video-1.jpg",
    tracks: [
      { title: "Electric Dreams", duration: "3:20" },
      { title: "Neon Lights", duration: "3:45" },
      { title: "Digital Love", duration: "4:10" },
    ]
  }
];

export default function Music() {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <Header />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-12 text-center">
          MY <span className="text-primary">MUSIC</span>
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {albums.map((album, index) => (
            <div key={index} className="bg-gray-900 rounded-lg overflow-hidden">
              <div className="aspect-square bg-gray-800 relative">
                <Image
                  src={album.cover}
                  alt={album.title}
                  fill
                  className="object-cover"
                  priority={true} // carga rápida de portadas principales
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{album.title}</h3>
                <p className="text-gray-400 mb-4">{album.type} • {album.year}</p>
                <ul className="space-y-2 mb-4">
                  {album.tracks.map((track, trackIndex) => (
                    <li key={trackIndex} className="flex justify-between text-sm">
                      <span>{track.title}</span>
                      <span className="text-gray-400">{track.duration}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-primary py-2 rounded font-bold hover:bg-opacity-90 transition-all">
                  LISTEN
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">STREAM ON ALL PLATFORMS</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="bg-gray-900 px-6 py-3 rounded-lg hover:bg-primary transition-all">Spotify</a>
            <a href="#" className="bg-gray-900 px-6 py-3 rounded-lg hover:bg-primary transition-all">Apple Music</a>
            <a href="#" className="bg-gray-900 px-6 py-3 rounded-lg hover:bg-primary transition-all">YouTube Music</a>
            <a href="#" className="bg-gray-900 px-6 py-3 rounded-lg hover:bg-primary transition-all">Amazon Music</a>
            <a href="#" className="bg-gray-900 px-6 py-3 rounded-lg hover:bg-primary transition-all">Deezer</a>
            <a href="#" className="bg-gray-900 px-6 py-3 rounded-lg hover:bg-primary transition-all">Tidal</a>
          </div>
        </div>
      </div>
    </div>
  );
}
