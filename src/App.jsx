import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./Components/About";
import History from "./Components/History";
import Contact from "./Components/Contact";
import Home from "./Components/Home";

function App() {

  return (
    <>
      <Router>
        <nav className="bg-gray-800 text-white px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold">Counter State</div>

            <div className="space-x-6">
              <Link to="/" className="hover:text-gray-300">
                Home
              </Link>
              <Link to="/about" className="hover:text-gray-300">
                About
              </Link>
              <Link to="/history" className="hover:text-gray-300">
                History
              </Link>
              <Link to="/contact" className="hover:text-gray-300">
                Contact
              </Link>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/history" element={<History />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
      </Router>

     
    </>
  );
}

export default App;
