import './Styling/App.css';
import Header from "./Components/Sections/Header"
import About from "./Components/Sections/About"
import Resume from "./Components/Sections/Resume"
import Contacts from "./Components/Sections/Contacts"

function App() {
  return (
    <div className="Base-Page">
      <Header />
      <About />
      <Resume />
      <Contacts />
    </div>
  );
}

export default App;
