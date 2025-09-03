export const Footer = () => {
  return (
    <footer className="py-12 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">KARLA LARA</h3>
            <p className="text-gray-400">Singer • Songwriter • Producer</p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">NAVIGATION</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-primary">Home</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-primary">About</a></li>
              <li><a href="/music" className="text-gray-400 hover:text-primary">Music</a></li>
              <li><a href="/tour" className="text-gray-400 hover:text-primary">Tour</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">SHOP</h4>
            <ul className="space-y-2">
              <li><a href="/merch" className="text-gray-400 hover:text-primary">Merchandise</a></li>
              <li><a href="/music" className="text-gray-400 hover:text-primary">Music</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">CONNECT</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary">Instagram</a>
              <a href="#" className="text-gray-400 hover:text-primary">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-primary">YouTube</a>
              <a href="#" className="text-gray-400 hover:text-primary">Spotify</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Karla Lara. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};