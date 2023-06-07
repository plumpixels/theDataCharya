import { Navbar, Home, About, Courses, Teacher, Contact, Footer } from './components/index';
import Signup from "./components/container/signup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {

  return (
  <div className="font-Poppins bg-Solitude">
      <Navbar />
      <Home />
      <About />
      <Courses />
      <Teacher />
      <Contact />
      <Footer />
    </div>);
}
export default App;
