import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import type { ITechnology } from "./types/technologies";

const techFetch = async(): Promise<ITechnology[]> =>{
  const res = await fetch('/public/technologies.json')
  const data = await res.json();
  return data;
}

function App() {
  
  return (
    <>
      <Nav />
      <Banner />
      <Footer />
    </>
  )
}

export default App;
