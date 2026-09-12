import TechnologyCard from "./TechnologyCard";
import StackSidebar from "./StackSidebar";

import type { ITechnology } from "../types/technologies";


interface Props {

technologies:ITechnology[];

stack:ITechnology[];

addToStack:(technology:ITechnology)=>void;

removeTechnology:(id:string)=>void;

removeAll:()=>void;

}



const Technology = ({
technologies,
stack,
addToStack,
removeTechnology,
removeAll

}:Props)=>{


return (

<section className="max-w-7xl mx-auto px-8 lg:px-20 py-20">


<h2 className="text-4xl font-bold">

Explore the

<span className="text-pink-500">
 Technologies
</span>

</h2>



<p className="text-slate-500 mt-3">

Pick one technology per category to build your ideal stack.

</p>




<div className="grid lg:grid-cols-4 gap-6 mt-10">


<div className="
lg:col-span-3
grid
md:grid-cols-2
xl:grid-cols-3
gap-6
">


{

technologies.map(item=>

<TechnologyCard

key={item.id}

technology={item}

addToStack={addToStack}

/>

)

}


</div>



<StackSidebar

stack={stack}

removeTechnology={removeTechnology}

removeAll={removeAll}

/>


</div>


</section>


)

}



export default Technology;