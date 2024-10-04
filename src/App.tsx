import './App.css';
import Counter from './components/Counter';
import Customers from './components/Customers';
import Empower from './components/Empower';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Intergration from './components/Intergration';
import Workflow from './components/Workflow';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Workflow />
      <Intergration />
      <Customers/>
      <Counter/>
      <Experience/>
      <Empower/>
      <Footer/>
    </div>
  );
}

export default App;
