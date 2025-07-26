import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Projects from "./pages/Projects"


function App() {
  return (
    <div className="overflow-y-scroll h-screen no-scrollbar bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}
export default App
