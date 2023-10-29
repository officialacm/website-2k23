import AppHero from "./components/AppHero";
import Events from "./components/Events";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import About from "./components/About"
import Join from "./components/Join"
import "./styles/App.css"

function App() {
  return (
    <div id="App">
      <AppHero />
      <About />
      <Join />
      <Events />
      <Gallery />
      <Testimonials />
    </div>
  );
}

export default App;
