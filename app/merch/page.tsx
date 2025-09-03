import { Header } from "../../components/Header";

const products = [
  {
    name: "Oh Yes She Knows T-Shirt",
    price: "$30",
    image: "/merch-1.jpg",
    description: "Limited edition t-shirt with album artwork"
  },
  {
    name: "Signed CD",
    price: "$15",
    image: "/merch-2.jpg",
    description: "Physical copy of 'Oh Yes She Knows' signed by Karla"
  },
  {
    name: "Vinyl Record",
    price: "$35",
    image: "/merch-3.jpg",
    description: "Limited edition vinyl pressing"
  },
  {
    name: "Hoodie",
    price: "$50",
    image: "/merch-4.png",
    description: "Comfortable hoodie with minimalist design"
  }
];

export default function Merch() {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <Header />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-12 text-center">
          OFFICIAL <span className="text-primary">MERCH</span>
        </h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {products.map((product, index) => (
            <div key={index} className="bg-gray-900 rounded-lg overflow-hidden">
              <div className="aspect-square bg-gray-800">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-400 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">{product.price}</span>
                  <button className="bg-primary px-4 py-2 rounded font-bold hover:bg-opacity-90 transition-all">
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">MORE ITEMS COMING SOON!</h2>
          <p className="text-gray-400 mb-6">
            Stay tuned for new merchandise releases. Sign up for our newsletter to be the first to know.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <input 
              type="email" 
              placeholder="Your email" 
              className="px-4 py-2 bg-gray-800 rounded text-white"
            />
            <button className="bg-primary px-6 py-2 rounded font-bold hover:bg-opacity-90 transition-all">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}