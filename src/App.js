import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';
import Projects from './components/pages/Projects';
import Project from './components/pages/Project';
import Login from './components/pages/Login';
import FirebaseLoginSystem from './components/pages/FirebaseLoginSystem';

import Container from './components/layouts/Container';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';

function App() {
  return (
    <Router>
      <Routes>
        {}
        <Route path="/Home" element={
          <>
            <Navbar />
            <Container customClass="min-height">
              <Home />
            </Container>
            <Footer />
          </>
        } />
        <Route path="/projects" element={
          <>
            <Navbar />
            <Container customClass="min-height">
              <Projects />
            </Container>
            <Footer />
          </>
        } />
        <Route path="/company" element={
          <>
            <Navbar />
            <Container customClass="min-height">
              <Company />
            </Container>
            <Footer />
          </>
        } />
        <Route path="/contact" element={
          <>
            <Navbar />
            <Container customClass="min-height">
              <Contact />
            </Container>
            <Footer />
          </>
        } />
        <Route path="/newproject" element={
          <>
            <Navbar />
            <Container customClass="min-height">
              <NewProject />
            </Container>
            <Footer />
          </>
        } />
        <Route path="/project/:id" element={
          <>
            <Navbar />
            <Project />
            <Footer />
          </>
        } />

        {}
        <Route path="/" element={<Login />} />
        <Route path="/Login" element={<FirebaseLoginSystem />} />
      </Routes>
    </Router>
  );
}

export default App;