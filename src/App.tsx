import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './Pages/HomePage/HomePage';
import { TutorialLandingPage } from './Pages/TutorialPages/TutorialLandingPage';
import { HtmlTutorialPage } from './Pages/TutorialPages/Tutorial_html';
import { CssTutorialPage } from './Pages/TutorialPages/Tutorial_css';
import { JsTutorialPage } from './Pages/TutorialPages/Tutorial_js';
import { AboutPage } from './Pages/About/AboutPage';
import { ContactPage } from './Pages/Contact/ContactPage';

function App() {
  
  return (
    <>  
      <BrowserRouter>
          <Routes>    
              <Route path="/" element={<HomePage />} />
              <Route path="/tutorialsLanding/" element={<TutorialLandingPage/>} />
              <Route path="/tutorials/html" element={<HtmlTutorialPage/>} />
              <Route path="/tutorials/css" element={<CssTutorialPage/>} />
              <Route path="/tutorials/js" element={<JsTutorialPage/>} />
              <Route path="/aboutPage" element={<AboutPage/>} />
              <Route path="/contactPage" element={<ContactPage/>} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
