import { Footer } from "../../Components/Footer";
import { Navbar } from "../../Components/NavBar";

export function JsTutorialPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center text-center px-6 pt-20">
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Learn JavaScript Basics
          </h2>
          <p className="text-lg md:text-xl mb-6 text-gray-600 max-w-2xl mx-auto">
            JavaScript is the programming language of the web. It adds
            interactivity, logic, and dynamic behavior to websites, making them
            more engaging and functional.
          </p>
        </div>
      </section>

      {/* Lessons Overview */}
      <section id="lessons" className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-12">Basic Lessons</h3>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <a href="#lesson1" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-blue-600 font-semibold text-xl">
              Lesson 1: Variables
            </a>
            <a href="#lesson2" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-green-600 font-semibold text-xl">
              Lesson 2: Data Types
            </a>
            <a href="#lesson3" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-yellow-600 font-semibold text-xl">
              Lesson 3: Functions
            </a>
          </div>

          <h3 className="text-3xl font-bold mb-12">Intermediate Lessons</h3>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <a href="#lesson4" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-purple-600 font-semibold text-xl">
              Lesson 4: Conditionals
            </a>
            <a href="#lesson5" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-pink-600 font-semibold text-xl">
              Lesson 5: Loops
            </a>
            <a href="#lesson6" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-indigo-600 font-semibold text-xl">
              Lesson 6: Arrays
            </a>
          </div>

          <h3 className="text-3xl font-bold mb-12">Advanced Lessons</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <a href="#lesson7" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-red-600 font-semibold text-xl">
              Lesson 7: Objects
            </a>
            <a href="#lesson8" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-teal-600 font-semibold text-xl">
              Lesson 8: DOM Manipulation
            </a>
          </div>
        </div>
      </section>

      {/* Lesson 1 */}
      <section id="lesson1" className="py-16 container mx-auto px-6">
        <h4 className="text-2xl font-bold mb-4">Lesson 1: Variables</h4>
        <p className="text-gray-700 mb-4">
          Variables store values for reuse. Use <code>let</code>, <code>const</code>, or <code>var</code>.
        </p>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
{`let name = "Dayan";
const age = 30;
var city = "Jersey City";`}
        </pre>
      </section>

      {/* Lesson 2 */}
      <section id="lesson2" className="py-16 container mx-auto px-6">
        <h4 className="text-2xl font-bold mb-4">Lesson 2: Data Types</h4>
        <p className="text-gray-700 mb-4">
          JavaScript has strings, numbers, booleans, arrays, objects, and more.
        </p>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
{`let str = "Hello";
let num = 42;
let isActive = true;
let arr = [1, 2, 3];
let obj = { name: "Dayan", age: 30 };`}
        </pre>
      </section>

      {/* Lesson 3 */}
      <section id="lesson3" className="py-16 container mx-auto px-6">
        <h4 className="text-2xl font-bold mb-4">Lesson 3: Functions</h4>
        <p className="text-gray-700 mb-4">Functions group reusable code blocks.</p>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
{`function greet(name) {
  return "Hello " + name;
}

console.log(greet("Dayan"));`}
        </pre>
      </section>

      {/* Lesson 4 */}
      <section id="lesson4" className="py-16 container mx-auto px-6">
        <h4 className="text-2xl font-bold mb-4">Lesson 4: Conditionals</h4>
        <p className="text-gray-700 mb-4">Conditionals let you run code based on conditions.</p>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
{`let age = 20;
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}`}
        </pre>
      </section>

      {/* Lesson 5 */}
      <section id="lesson5" className="py-16 container mx-auto px-6">
        <h4 className="text-2xl font-bold mb-4">Lesson 5: Loops</h4>
        <p className="text-gray-700 mb-4">Loops repeat actions until a condition is met.</p>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
{`for (let i = 0; i < 5; i++) {
  console.log("Number: " + i);
}

let j = 0;
while (j < 3) {
  console.log(j);
  j++;
}`}
        </pre>
      </section>

      {/* Lesson 6 */}
      <section id="lesson6" className="py-16 container mx-auto px-6">
        <h4 className="text-2xl font-bold mb-4">Lesson 6: Arrays</h4>
        <p className="text-gray-700 mb-4">Arrays store multiple values in one variable.</p>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
{`let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[0]); // Apple
fruits.push("Mango");`}
        </pre>
      </section>

      {/* Lesson 7 */}
      <section id="lesson7" className="py-16 container mx-auto px-6">
        <h4 className="text-2xl font-bold mb-4">Lesson 7: Objects</h4>
        <p className="text-gray-700 mb-4">Objects store data as key-value pairs.</p>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
{`let person = {
  name: "Dayan",
  age: 30,
  greet: function() {
    console.log("Hello " + this.name);
  }
};

person.greet();`}
        </pre>
      </section>

      {/* Lesson 8 */}
      <section id="lesson8" className="py-16 container mx-auto px-6">
        <h4 className="text-2xl font-bold mb-4">Lesson 8: DOM Manipulation</h4>
        <p className="text-gray-700 mb-4">
          The DOM lets you interact with HTML elements using JavaScript.
        </p>
        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
{`// Select element
let heading = document.getElementById("title");

// Change text
heading.textContent = "New Title";

// Add event listener
document.getElementById("btn").addEventListener("click", () => {
  alert("Button clicked!");
});`}
        </pre>
      </section>



      {/* Footer */}
      <Footer />
    </div>
  );
}