import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';
import Projects from './components/pages/Projects';
import Project from './components/pages/Project';

import Container from './components/layouts/Container';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <Container customClass="min-height">
            <Home />
          </Container>
        } />
        <Route path="/projects" element={
          <Container customClass="min-height">
            <Projects />
          </Container>
        } />
        <Route path="/company" element={
          <Container customClass="min-height">
            <Company />
          </Container>
        } />
           <Route path="/contact" element={
          <Container customClass="min-height">
            <Contact />
          </Container>
        } />
        <Route path="/newproject" element={
          <Container customClass="min-height">
            <NewProject />
          </Container>
        } />
        <Route path="/project/:id" element={
            <Project />
        } />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;