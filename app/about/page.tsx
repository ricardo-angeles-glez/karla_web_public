import { Header } from "../../components/Header";

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <Header />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-12 text-center">
          ABOUT <span className="text-primary">KARLA</span>
        </h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-6">My Story</h2>
              <p className="text-lg mb-6">
                With over 8 years of experience in the music industry, Karla Lara has
                established herself as a versatile singer-songwriter and producer.
                Her unique blend of soulful vocals and innovative production has
                captivated audiences worldwide.
              </p>
              <p className="text-lg">
                Born and raised in a musical family, Karla discovered her passion for
                music at an early age. Her journey has taken her from small local venues
                to international stages, always staying true to her authentic sound.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-6">Musical Journey</h2>
              <div className="space-y-4">
                <div className="p-4 bg-gray-900 rounded-lg">
                  <h3 className="text-lg font-bold text-primary">2015</h3>
                  <p>Released first EP "First Steps"</p>
                </div>
                <div className="p-4 bg-gray-900 rounded-lg">
                  <h3 className="text-lg font-bold text-primary">2018</h3>
                  <p>First international tour across Latin America</p>
                </div>
                <div className="p-4 bg-gray-900 rounded-lg">
                  <h3 className="text-lg font-bold text-primary">2020</h3>
                  <p>Signed with Soulfire Records</p>
                </div>
                <div className="p-4 bg-gray-900 rounded-lg">
                  <h3 className="text-lg font-bold text-primary">2023</h3>
                  <p>Launched "Oh Yes She Knows" project</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Artist Statement</h2>
            <blockquote className="text-xl italic border-l-4 border-primary pl-6">
              "Music is the divine way to tell beautiful, poetic things to the heart.
              My mission is to create sounds that touch souls and connect people across
              cultures and experiences. Through my music, I want to empower others to
              embrace their truth and find strength in vulnerability."
            </blockquote>
            <p className="mt-4 font-bold">— Karla Lara</p>
          </div>
        </div>
      </div>
    </div>
  );
}