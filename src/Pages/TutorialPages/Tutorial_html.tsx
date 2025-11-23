import { Footer } from "../../Components/Footer";
import { Navbar } from "../../Components/NavBar";

export function HtmlTutorialPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center text-center px-6 pt-20">
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Learn HTML Basics
          </h2>
          <p className="text-lg md:text-xl mb-6 text-gray-600 max-w-2xl mx-auto">
            HTML (HyperText Markup Language) is the foundation of the web. It structures content
            like text, images, and links so browsers can display them. Every modern website starts
            with HTML.
          </p>
        </div>
      </section>

      {/* Lessons Overview */}
      <section id="lessons" className="py-16 bg-gray-100">
  <div className="container mx-auto px-6 text-center">
    {/* Basic Lessons */}
    <h3 className="text-3xl font-bold mb-12">Basic Lessons</h3>
    <div className="grid md:grid-cols-3 gap-8 mb-16">
      <a
        href="#lesson1"
        className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-blue-600 font-semibold text-xl"
      >
        Lesson 1: Structure
      </a>
      <a
        href="#lesson2"
        className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-green-600 font-semibold text-xl"
      >
        Lesson 2: Text & Headings
      </a>
      <a
        href="#lesson3"
        className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-yellow-600 font-semibold text-xl"
      >
        Lesson 3: Links & Images
      </a>
    </div>

    {/* Intermediate Lessons */}
    <h3 className="text-3xl font-bold mb-12">Intermediate Lessons</h3>
    <div className="grid md:grid-cols-3 gap-8 mb-16">
      <a
        href="#lesson4"
        className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-purple-600 font-semibold text-xl"
      >
        Lesson 4: Lists
      </a>
      <a
        href="#lesson5"
        className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-pink-600 font-semibold text-xl"
      >
        Lesson 5: Tables
      </a>
      <a
        href="#lesson6"
        className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-indigo-600 font-semibold text-xl"
      >
        Lesson 6: Forms
      </a>
    </div>

    {/* Advanced Lessons */}
    <h3 className="text-3xl font-bold mb-12">Advanced Lessons</h3>
    <div className="grid md:grid-cols-2 gap-8">
      <a
        href="#lesson7"
        className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-red-600 font-semibold text-xl"
      >
        Lesson 7: Semantic Elements
      </a>
      <a
        href="#lesson8"
        className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition text-teal-600 font-semibold text-xl"
      >
        Lesson 8: Media Embeds
      </a>
    </div>
  </div>
</section>

      {/* Lesson 1 */}
      <section id="lesson1" className="py-16 container mx-auto px-6">
        <h4 className="text-2xl font-bold mb-4">Lesson 1: Structure of an HTML Page</h4>
        <p className="text-gray-700 mb-4">
          Every HTML document starts with a basic skeleton. This tells the browser how to interpret the page.
        </p>
        <pre className="bg-gray-900 text-white p-4 rounded-lg text-left overflow-x-auto">
{`<!DOCTYPE html>
<html>
  <head>
    <title>My First Page</title>
  </head>
  <body>
    <h1>Hello World!</h1>
    <p>This is my first webpage.</p>
  </body>
</html>`}
        </pre>
      </section>

      {/* Lesson 2 */}
      <section id="lesson2" className="py-16 container mx-auto px-6">
        <h4 className="text-2xl font-bold mb-4">Lesson 2: Text & Headings</h4>
        <p className="text-gray-700 mb-4">
          HTML provides tags for text content. Headings range from <code>&lt;h1&gt;</code> (largest) to <code>&lt;h6&gt;</code> (smallest).
        </p>
        <pre className="bg-gray-900 text-white p-4 rounded-lg text-left overflow-x-auto">
{`<h1>Main Title</h1>
<h2>Subheading</h2>
<p>This is a paragraph of text.</p>`}
        </pre>
      </section>

      {/* Lesson 3 */}
      <section id="lesson3" className="py-16 container mx-auto px-6">
        <h4 className="text-2xl font-bold mb-4">Lesson 3: Links & Images</h4>
        <p className="text-gray-700 mb-4">
          Links connect pages together, and images add visuals. Use <code>&lt;a&gt;</code> for links and <code>&lt;img&gt;</code> for images.
        </p>
        <pre className="bg-gray-900 text-white p-4 rounded-lg text-left overflow-x-auto">
{`<a href="https://example.com">Visit Example</a>

<img src="image.jpg" alt="A description of the image">`}
        </pre>
      </section>

      {/* Lesson 4 */}
<section id="lesson4" className="py-16 container mx-auto px-6">
  <h4 className="text-2xl font-bold mb-4">Lesson 4: Lists</h4>
  <p className="text-gray-700 mb-4">
    Lists help organize content. Use <code>&lt;ul&gt;</code> for unordered lists and <code>&lt;ol&gt;</code> for ordered lists.
  </p>
  <pre className="bg-gray-900 text-white p-4 rounded-lg text-left overflow-x-auto">
{`<ul>
  <li>Apples</li>
  <li>Bananas</li>
</ul>

<ol>
  <li>First step</li>
  <li>Second step</li>
</ol>`}
  </pre>
</section>

{/* Lesson 5 */}
<section id="lesson5" className="py-16 container mx-auto px-6">
  <h4 className="text-2xl font-bold mb-4">Lesson 5: Tables</h4>
  <p className="text-gray-700 mb-4">
    Tables display structured data. Use rows (<code>&lt;tr&gt;</code>) and cells (<code>&lt;td&gt;</code>).
  </p>
  <pre className="bg-gray-900 text-white p-4 rounded-lg text-left overflow-x-auto">
{`<table border="1">
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Alice</td>
    <td>24</td>
  </tr>
</table>`}
  </pre>
</section>

{/* Lesson 6 */}
<section id="lesson6" className="py-16 container mx-auto px-6">
  <h4 className="text-2xl font-bold mb-4">Lesson 6: Forms</h4>
  <p className="text-gray-700 mb-4">
    Forms collect user input. Inputs can be text, email, password, etc.
  </p>
  <pre className="bg-gray-900 text-white p-4 rounded-lg text-left overflow-x-auto">
{`<form>
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">

  <label for="email">Email:</label>
  <input type="email" id="email" name="email">

  <button type="submit">Submit</button>
</form>`}
  </pre>
</section>

{/* Lesson 7 */}
<section id="lesson7" className="py-16 container mx-auto px-6">
  <h4 className="text-2xl font-bold mb-4">Lesson 7: Semantic Elements</h4>
  <p className="text-gray-700 mb-4">
    Semantic elements give meaning to your page structure, improving accessibility and SEO.
  </p>
  <pre className="bg-gray-900 text-white p-4 rounded-lg text-left overflow-x-auto">
{`<header>
  <h1>My Website</h1>
</header>
<nav>
  <a href="#home">Home</a>
  <a href="#about">About</a>
</nav>
<main>
  <p>Welcome to my site!</p>
</main>
<footer>
  <p>© 2025 My Website</p>
</footer>`}
  </pre>
</section>

{/* Lesson 8 */}
<section id="lesson8" className="py-16 container mx-auto px-6">
  <h4 className="text-2xl font-bold mb-4">Lesson 8: Media Embeds</h4>
  <p className="text-gray-700 mb-4">
    Add videos and audio directly into your page.
  </p>
  <pre className="bg-gray-900 text-white p-4 rounded-lg text-left overflow-x-auto">
{`<video controls width="300">
  <source src="movie.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

<audio controls>
  <source src="song.mp3" type="audio/mpeg">
  Your browser does not support the audio tag.
</audio>`}
  </pre>
</section>

      {/* Footer */}
      <Footer />
    </div>


  );
};