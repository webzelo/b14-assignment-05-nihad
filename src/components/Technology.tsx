import React, { useState } from 'react';
import TechnologyCard from './TechnologyCard';

const Technology = () => {

    const [stack, setStack] = useState<TechnologyType[]>([]);

    const addToStack = (item:TechnologyType)=>{
        const exists =
        stack.find(
            tech=>tech.id === item.id
        );
    }

    if(!exists){

        setStack([
            ...stack, 
            item
        ]);
    }


    const removeTechnology=(id:number)=>{
        setStack(
            stack.filter(
                item=>item.id!==id
            )
        );
    };

    const removeAll =()=>{
        setStack([]);
    };

    return (
        <section className='technology-section'>
            <h2>Explore the <span>Technologies</span></h2>

            <p>Pick one technology per catergory to build your ideal stack.</p>

            <div className="technology-wrapper">
                <div className="technology-grid">

                    technologies.map(item=>(
                        <TechnologyCard
                        key={item.id}
                        technology={item}
                        addToStack={addToStack}
                        />
                    ))

                </div>
            </div>
        </section>
    );
};

export default Technology;