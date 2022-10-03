
import './App.css';
import { Banner } from './components/Banner'
import { NavBar } from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { About } from './components/About';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
