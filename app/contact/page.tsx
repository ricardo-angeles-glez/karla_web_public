import { Header } from "../../components/Header";

export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <Header />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-12 text-center">
          GET IN <span className="text-primary">TOUCH</span>
        </h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-6">CONTACT INFO</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-primary mb-2">Booking</h3>
                  <p>Maria Rodriguez</p>
                  <p>maria@karlalara.com</p>
                  <p>+1 (555) 123-4567</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-primary mb-2">Management</h3>
                  <p>Luna Music Group</p>
                  <p>management@karlalara.com</p>
                  <p>+1 (555) 987-6543</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-primary mb-2">Press</h3>
                  <p>press@karlalara.com</p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-6">SEND A MESSAGE</h2>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-3 bg-gray-900 rounded"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 bg-gray-900 rounded"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block mb-2">Subject</label>
                  <select id="subject" className="w-full p-3 bg-gray-900 rounded">
                    <option value="">Select a subject</option>
                    <option value="booking">Booking Inquiry</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="press">Press</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full p-3 bg-gray-900 rounded"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-primary py-3 rounded font-bold hover:bg-opacity-90 transition-all"
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
          
          <div className="bg-gray-900 p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">STAY CONNECTED</h2>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-2xl hover:text-primary transition-colors">Instagram</a>
              <a href="#" className="text-2xl hover:text-primary transition-colors">Twitter</a>
              <a href="#" className="text-2xl hover:text-primary transition-colors">YouTube</a>
              <a href="#" className="text-2xl hover:text-primary transition-colors">Spotify</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}