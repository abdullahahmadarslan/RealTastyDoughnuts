import Navbar from './Navbar';
import Slider from './Slider';
import About from './About';
import Menu from './Menu';
import Contact from './Contact';
import Footer from './Footerr';

const App = () => {
  return (
    <div>
      <Navbar />
      <Slider id="slider" title="slider" />
      <About id="about-us" title="About Section" />
      <Menu id="menu" title="menu Section" />
      <Contact id="contact" title="Contact Section" />
      <Footer />
    </div>
  );
};

export default App;