import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import { MovieProvider } from "./context/moviedb/MovieContext";
import About from "./pages/About";
import Home from "./pages/Home";
import ItemDetails from "./pages/ItemDetails";
import CompareItems from "./pages/CompareItems";

function App() {
  return (
    <MovieProvider>
      <Router>
        <div className="flex flex-col justify-between bg-gray-800">
          <Navbar />
          <main className="container mx-auto px-5 min-h-screen">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/itemdetails/:id" element={<ItemDetails />} />
              <Route path="/compareitems" element={<CompareItems />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </MovieProvider>
  );
}

export default App;
