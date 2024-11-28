import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';

import Container from './components/layouts/Container';

function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/company">Company</Link>
        <Link to="/newproject">NewProject</Link>
      </div>
      <Routes>
        <Route path="/" element={
          <Container customClass="min-height">
            <Home />
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
      </Routes>
      <p>Footer</p>
    </Router>
  );
}

export default App;