import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/global.css";
import MusicPlayer from "../components/MusicPlayer"; // Ruta correcta

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Karla Lara - Oh Yes She Knows",
  description: "Official portfolio of singer-songwriter Karla Lara",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="relative bg-black text-white">
        {/* Renderiza todo el contenido de la página */}
        {children}

        {/* MusicPlayer responsivo */}
        <div className="fixed z-50">
          {/* Desktop: a la derecha inferior */}
          <div className="hidden md:block bottom-8 right-8 fixed">
            <MusicPlayer />
          </div>

          {/* Mobile: centrado inferior */}
          <div className="block md:hidden bottom-4 left-1/2 transform -translate-x-1/2 fixed">
            <MusicPlayer />
          </div>
        </div>
      </body>
    </html>
  );
}
