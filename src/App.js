import './Styling/App.css';
import Header from "./Components/Sections/Header"
import Intro from './Components/Sections/Intro';
import About from './Components/Sections/About';
import Projects from "./Components/Sections/Projects"
import Skills from "./Components/Sections/Skills"
import Contacts from "./Components/Sections/Contacts"

function App() {
  return (
    <div className="Base-Page">
      <div className='Col-Flex'>
        <Header />
        <Intro />
        <About />
        <Projects />
        <Skills />
        <Contacts />
      </div>
    </div>
  );
}

export default App;
