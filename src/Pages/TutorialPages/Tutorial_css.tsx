import { Footer } from "../../Components/Footer";
import { Navbar } from "../../Components/NavBar";

export function CssTutorialPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center text-center px-6 pt-20">
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Learn CSS Basics
          </h2>
          <p className="text-lg md:text-xl mb-6 text-gray-600 max-w-2xl mx-auto">
            CSS (Cascading Style Sheets) is used to style and layout web pages.
            It controls colors, fonts, spacing, and positioning to make websites
            visually appealing and user-friendly.
          </p>
        </div>
      </section>

      {/* Lessons Overview */}
      <section id="lessons" className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-12">Basic Lessons</h3>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <a href="#lesson1" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-blue-600 font-semibold text-xl">
              Lesson 1: Selectors
            </a>
            <a href="#lesson2" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-green-600 font-semibold text-xl">
              Lesson 2: Colors & Fonts
            </a>
            <a href="#lesson3" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-yellow-600 font-semibold text-xl">
              Lesson 3: Box Model
            </a>
          </div>

          <h3 className="text-3xl font-bold mb-12">Intermediate Lessons</h3>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <a href="#lesson4" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-purple-600 font-semibold text-xl">
              Lesson 4: Flexbox
            </a>
            <a href="#lesson5" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-pink-600 font-semibold text-xl">
              Lesson 5: Grid
            </a>
            <a href="#lesson6" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-indigo-600 font-semibold text-xl">
              Lesson 6: Positioning
            </a>
          </div>

          <h3 className="text-3xl font-bold mb-12">Advanced Lessons</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <a href="#lesson7" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-red-600 font-semibold text-xl">
              Lesson 7: Transitions & Animations
            </a>
            <a href="#lesson8" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-teal-600 font-semibold text-xl">
              Lesson 8: Responsive Design
            </a>
          </div>
        </div>
      </section>

      {/* Lesson 1 */}
      <section id="lesson1" className="py-16 container mx-auto px-6">
        <h4 className="text-2xl font-bold mb-4">Lesson 1: Selectors</h4>
        <p className="text-gray-700 mb-4">Selectors target HTML elements to apply styles.</p>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
{`p { color: blue; }
h1 { font-size: 32px; }`}
        </pre>
      </section>

      {/* Lesson 2 */}
      <section id="lesson2" className="py-16 container mx-auto px-6">
        <h4 className="text-2xl font-bold mb-4">Lesson 2: Colors & Fonts</h4>
        <p className="text-gray-700 mb-4">CSS controls text appearance with color and font properties.</p>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
{`body { font-family: Arial, sans-serif; }
h1 { color: crimson; }`}
        </pre>
      </section>

      {/* Lesson 3 */}
      <section id="lesson3" className="py-16 container mx-auto px-6">
        <h4 className="text-2xl font-bold mb-4">Lesson 3: Box Model</h4>
        <p className="text-gray-700 mb-4">Every element is a box with margin, border, padding, and content.</p>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
{`div {
  margin: 20px;
  padding: 10px;
  border: 2px solid black;
}`}</pre>
      </section>

      {/* Lesson 4 */}
      <section id="lesson4" className="py-16 container mx-auto px-6">
        <h4 className="text-2xl font-bold mb-4">Lesson 4: Flexbox</h4>
        <p className="text-gray-700 mb-4">Flexbox makes layouts flexible and responsive.</p>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
{`.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}`}</pre>
      </section>

      {/* Lesson 5 */}
      <section id="lesson5" className="py-16 container mx-auto px-6">
        <h4 className="text-2xl font-bold mb-4">Lesson 5: Grid</h4>
        <p className="text-gray-700 mb-4">CSS Grid is powerful for two-dimensional layouts.</p>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
{`.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
}`}</pre>
      </section>

      {/* Lesson 6 */}
      <section id="lesson6" className="py-16 container mx-auto px-6">
        <h4 className="text-2xl font-bold mb-4">Lesson 6: Positioning</h4>
        <p className="text-gray-700 mb-4">Position elements with relative, absolute, fixed, or sticky.</p>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
{`.box {
  position: absolute;
  top: 50px;
  left: 100px;
}`}</pre>
      </section>

      {/* Lesson 7 */}
      <section id="lesson7" className="py-16 container mx-auto px-6">
        <h4 className="text-2xl font-bold mb-4">Lesson 7: Transitions & Animations</h4>
        <p className="text-gray-700 mb-4">CSS adds smooth effects and animations.</p>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
{`.button {
  transition: background-color 0.3s ease;
}
.button:hover {
  background-color: orange;
}`}</pre>
      </section>

      {/* Lesson 8 */}
      <section id="lesson8" className="py-16 container mx-auto px-6">
        <h4 className="text-2xl font-bold mb-4">Lesson 8: Responsive Design</h4>
        <p className="text-gray-700 mb-4">Media queries adapt layouts to different screen sizes.</p>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
{`@media (max-width: 600px) {
  body { font-size: 14px; }
}`}</pre>
      </section>



      {/* Footer */}
      <Footer />
    </div>
  );
}