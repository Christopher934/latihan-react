import Navbar from "./Navbar";
import Hero from "./Hero";
import Skill from "./Skill";
import About from "./About";


function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Skill />
      <About className="pt-[10rem]" />
    </>
  )
}

export default App
