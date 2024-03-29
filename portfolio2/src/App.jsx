import About from "./Components/About";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Projects from "./Components/Projects";
import Experience from "./Components/Experience";
import Contact from "./Components/Contact";
import ContactPhone from "./Components/ContactPhone";
// import Test from "./Components/Test";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <ContactPhone />
      {/* <Test /> */}
    </div>
  )
}

export default App;