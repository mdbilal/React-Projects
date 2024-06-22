import './App.css';
import Header from './components/Header.jsx';
import {Routes, Route} from "react-router-dom";
import Home from './pages/Home.jsx';
import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx';
import About from './pages/About.jsx';
import Blogs from './pages/Blogs.jsx';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="blogs" element={<Blogs />}></Route>
      </Routes>
    </>
  )
}

export default App
