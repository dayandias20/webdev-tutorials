import { Footer } from "../../Components/Footer";
import { Navbar } from "../../Components/NavBar";

export function TutorialLandingPage() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
            <Navbar />
        
        <section
        id="tutorials"
        className="flex-1 flex items-center justify-center px-6"
      >
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8">
            Choose a Tutorial
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <a
              href="/tutorials/html"
              className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition text-blue-600 font-semibold text-xl"
            >
              HTML
            </a>
            <a
              href="/tutorials/css"
              className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition text-green-600 font-semibold text-xl"
            >
              CSS
            </a>
            <a
              href="/tutorials/js"
              className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition text-yellow-600 font-semibold text-xl"
            >
              JavaScript
            </a>
          </div>
        </div>
      </section>

     <Footer />
    </div>

    )
} 