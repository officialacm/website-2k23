import AppHero from "./components/AppHero";
import Events from "./components/Events";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import About from "./components/About"
import Join from "./components/Join"
import "./styles/App.css"
import Team from "./components/Team";
import homePagePoster from "./Assets/posters/homePagePoster.png"

function App() {
  return (
    <div id="App">
      <AppHero poster={homePagePoster} />
      <About />
      <Join />
      <Events />
      <Team />
      <Gallery />
      <Testimonials />
    </div>
  );
}

export default App;
