import { Navbar, Home, About, Courses, Teacher, Contact, Footer } from './components/index';
import Signup from "./components/container/signup";
function App() {

  return (
  <div class="font-Poppins bg-Solitude">
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
