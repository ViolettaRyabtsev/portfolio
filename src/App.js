import "./App.css";
import NavBar from "./NavBar";
import Skills from "./skills";

import MainPage from "./MainPage";
// import Contact from "./Contact";
import Footer from "./Footer";
import Projects from "./projects/Projects";
import {
  NavLink,
  Routes,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
