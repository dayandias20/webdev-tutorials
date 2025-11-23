import { Footer } from "../../Components/Footer";
import { SubscriptionForm } from "../../Components/SubscriptionForm";
// import { Navbar } from "../../Components/NavBar";


export function ContactPage() {
  return (
    
    <div className="min-h-screen flex flex-col bg-gray-900 text-gray-100">
      {/* Navbar */}
        <header className="bg-black shadow">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="/" className="text-2xl font-bold text-blue-600">DevStudio</a>
                
                <nav className="space-x-6">
                    <a href="/tutorialsLanding/" className="hover:text-blue-600">Lessons</a>
                    <a href="/aboutPage" className="hover:text-blue-600">About</a>
                    <a href="/contactPage" className="hover:text-blue-600">Contact</a>
                </nav>
            </div>
        </header> 

      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center text-center px-6 pt-20">
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
            Get in Touch
          </h2>
          <p className="text-lg md:text-xl mb-6 text-gray-400 max-w-2xl mx-auto">
            I’d love to connect with you! Whether it’s about web development,
            business ideas, or collaboration opportunities, feel free to reach out.
          </p>
        </div>
      </section>

      {/* Contact Links */}
      <section className="py-16 container mx-auto px-6 text-center">
        <div className="grid md:grid-cols-2 gap-12">
          {/* LinkedIn Placeholder */}
          <div className="bg-gray-800 p-8 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-4 text-blue-400">LinkedIn</h3>
            <p className="text-gray-300 mb-4">
              Add your LinkedIn profile link here.
            </p>
            <a
              href="#"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Visit LinkedIn
            </a>
          </div>

          {/* Email Placeholder */}
          <div className="bg-gray-800 p-8 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-4 text-green-400">Email</h3>
            <p className="text-gray-300 mb-4">
              Add your email address here.
            </p>
            <a
              href="#"
              className="inline-block px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
              Send Email
            </a>
          </div>
        </div>
      </section>

      <SubscriptionForm />

      {/* Footer */}
      <Footer />
    </div>
  );
}