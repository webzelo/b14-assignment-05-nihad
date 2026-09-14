import { useEffect, useState } from "react";

import { toast } from "react-toastify";


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


  // Add Technology

  const addToStack = (technology: ITechnology) => {

    const exists =
      stack.find(
        item => item.id === technology.id
      );

    if (exists) {

      toast.warning(
        `${technology.name} is already in your stack`
      );


      return;

    }




    setStack([

      ...stack,

      technology

    ]);



    toast.success(

      `${technology.name} added to your stack`

    );


  };


  // Remove Single Technology

  const removeTechnology = (id: string) => {

    const removedItem = stack.find(

      item => item.id === id

    );


    setStack(

      stack.filter(

        item => item.id !== id

      )

    );



    if (removedItem) {


      toast.error(

        `${removedItem.name} removed from your stack`

      );


    }


  };



  // Remove All

  const removeAll = () => {



    if(stack.length === 0){


      toast.info(

        "Your stack is already empty"

      );


      return;

    }



    setStack([]);


    toast.error(

      "All technologies removed from your stack"

    );


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