import { useEffect, useState } from "react";

import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Technology from "./components/Technology";

import type { ITechnology } from "./types/technologies";


function App() {

  const [technologies, setTechnologies]
    = useState<ITechnology[]>([]);

  const [stack, setStack]
    = useState<ITechnology[]>([]);


  useEffect(() => {

    fetch("/technologies.json")

      .then(res => res.json())

      .then(data => setTechnologies(data));


  }, []);


  const addToStack = (technology: ITechnology) => {

    const exists =
      stack.find(
        item => item.id === technology.id
      );


    if (exists) {

      alert("Already added");

      return;

    }

    setStack([
      ...stack,
      technology
    ]);


  };

  const removeTechnology = (id: string) => {


    setStack(
      stack.filter(
        item => item.id !== id
      )
    );
  };

  const removeAll = () => {

    setStack([]);

  };


  return (

    <>

      <Nav />
      <Banner />
      <Technology

        technologies={technologies}

        stack={stack}

        addToStack={addToStack}

        removeTechnology={removeTechnology}

        removeAll={removeAll}

      />

      <Footer />


    </>

  )

}


export default App;