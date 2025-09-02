import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./Components/About";
import History from "./Components/History";
import Contact from "./Components/Contact";
import Home from "./Components/Home";

function App() {

  return (
    <>
      <Router>
        <nav class="bg-gray-800 text-white px-6 py-4">
          <div class="flex justify-between items-center">
            <div class="text-xl font-bold">Counter State</div>

            <div class="space-x-6">
              <Link to="/" class="hover:text-gray-300">
                Home
              </Link>
              <Link to="/about" class="hover:text-gray-300">
                About
              </Link>
              <Link to="/history" class="hover:text-gray-300">
                History
              </Link>
              <Link to="/contact" class="hover:text-gray-300">
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
