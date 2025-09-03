import { Header } from "../../components/Header";

const tourDates = [
  {
    date: "15 JUN 2024",
    venue: "Blue Note Jazz Club",
    location: "New York, NY",
    status: "UPCOMING"
  },
  {
    date: "22 JUN 2024",
    venue: "The Echo",
    location: "Los Angeles, CA",
    status: "UPCOMING"
  },
  {
    date: "30 JUN 2024",
    venue: "Neumos",
    location: "Seattle, WA",
    status: "UPCOMING"
  },
  {
    date: "12 JUL 2024",
    venue: "Metro Chicago",
    location: "Chicago, IL",
    status: "UPCOMING"
  },
  {
    date: "25 JUL 2024",
    venue: "Barcelona Jazz Festival",
    location: "Barcelona, Spain",
    status: "UPCOMING"
  }
];

export default function Tour() {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <Header />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-12 text-center">
          TOUR <span className="text-primary">DATES</span>
        </h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 mb-16">
            {tourDates.map((date, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg flex flex-col md:flex-row justify-between items-start md:items-center">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-xl font-bold">{date.venue}</h3>
                  <p className="text-gray-400">{date.location}</p>
                </div>
                <div className="flex flex-col md:items-end">
                  <p className="text-lg font-bold">{date.date}</p>
                  <span className="text-primary text-sm">{date.status}</span>
                </div>
                <button className="mt-4 md:mt-0 bg-primary px-6 py-2 rounded font-bold hover:bg-opacity-90 transition-all">
                  TICKETS
                </button>
              </div>
            ))}
          </div>
          
          <div className="bg-gray-900 p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">WANT TO BOOK KARLA?</h2>
            <p className="mb-6">For booking inquiries, please contact our team</p>
            <a href="/contact" className="bg-primary px-8 py-3 rounded font-bold hover:bg-opacity-90 transition-all">
              CONTACT FOR BOOKING
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}