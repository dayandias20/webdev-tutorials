import { Footer } from "../../Components/Footer";
import { Navbar } from "../../Components/NavBar";


export function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center text-center px-6 pt-20">
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">About Me</h2>
          <p className="text-lg md:text-xl mb-6 text-gray-600 max-w-2xl mx-auto">
            Hi, I'm Dayan — a tech professional with a background in computer science, 
            international operations, and a passion for building resilient software systems.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Background */}
          <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-4">Background</h3>
            <p className="text-gray-700">
              I earned my Master’s in Computer Science after migrating to the US, 
              and previously served as a commissioned naval officer in Sri Lanka. 
              My journey blends discipline, leadership, and technical curiosity.
            </p>
          </div>

          {/* Skills */}
          <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-4">Skills</h3>
            <p className="text-gray-700">
              I specialize in full-stack development, cloud workflows, and CRM platforms. 
              My toolkit includes Java, Spring Boot, React, TypeScript, Tailwind CSS, 
              Salesforce, and cloud services like AWS and Azure.
            </p>
          </div>

          {/* Interests */}
          <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-4">Interests</h3>
            <p className="text-gray-700">
              I’m deeply curious about AI/ML, healthcare tech, and international logistics. 
              I enjoy exploring hybrid career paths that combine technology, compliance, 
              and business innovation.
            </p>
          </div>

          {/* Goals */}
          <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-4">Goals</h3>
            <p className="text-gray-700">
              In the short term, I’m focused on securing a full-stack developer role and 
              launching a tutorial platform. Long term, I aim to build scalable businesses 
              and master advanced technologies like AI/ML.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}