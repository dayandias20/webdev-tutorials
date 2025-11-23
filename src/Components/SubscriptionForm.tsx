export function SubscriptionForm() {
    return (
        <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-6 text-white">Subscribe</h3>
          <p className="text-gray-400 mb-8">
            Enter your name and email to subscribe for updates.
          </p>
          <form className="max-w-md mx-auto space-y-6">
            <div>
              <label htmlFor="name" className="block text-left text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-left text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>


    )
};