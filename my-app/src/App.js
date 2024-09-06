import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar title="My App"/>
      <div className="container my-3">
          {/* <TextForm heading="Enter the text to analyze below"/> */}
          <About/>
      </div>
    </>
  );
}

export default App;