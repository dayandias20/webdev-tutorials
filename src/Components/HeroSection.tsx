import { useNavigate } from "react-router-dom";

export function HeroSection() {

    const navigate = useNavigate();
    
    const getStartedClicked = () => {
        navigate('/tutorialsLanding/');
    };

    return (
        <section className="flex-1 flex items-center justify-center text-center px-6">
            <div>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
                Build Modern Web Experiences
            </h2>
            <p className="text-lg md:text-xl mb-6 text-gray-600">
                We craft responsive, scalable, and beautiful websites with the latest technologies.
            </p>
            <button
                onClick={getStartedClicked}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
            >
                Get Started
            </button>
            </div>
        </section>
    );
}