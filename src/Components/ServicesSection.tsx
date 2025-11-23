export function ServicesSection() {
    return (
        <section id="services" className="py-16 bg-gray-100">
            <div className="container mx-auto px-6 text-center">
                <h3 className="text-3xl font-bold mb-12">What You Will Learn</h3>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                        <h4 className="text-xl font-semibold mb-2">Web Development</h4>
                        <p className="text-gray-600">
                            Knowledge to build a custom websites using HTML, CSS and JavaScript.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                        <h4 className="text-xl font-semibold mb-2">API Integration</h4>
                        <p className="text-gray-600">
                            Seamless backend connectivity with REST and GraphQL APIs.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                        <h4 className="text-xl font-semibold mb-2">UI/UX Design</h4>
                        <p className="text-gray-600">
                            Intuitive, user-friendly designs that enhance customer experience.
                        </p>
                    </div>
                </div>
            </div>
        </section>

    )
};