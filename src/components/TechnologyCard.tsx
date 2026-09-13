import type { ITechnology } from "../types/technologies";


interface Props {
    technology: ITechnology;
    addToStack: (technology: ITechnology) => void;
}


const TechnologyCard = ({
    technology,
    addToStack
}: Props) => {


    return (
        <div
            className="
                bg-white
                border
                border-slate-200
                rounded-xl
                shadow-sm
                hover:shadow-md
                transition-all
                duration-300
                p-5
                h-full
                flex
                flex-col
            "
        >


            {/* Icon + Badge */}
            <div
                className="
                    flex
                    justify-between
                    items-start
                    mb-5
                "
            >

                <img
                    src={technology.icon}
                    alt={technology.name}
                    className="
                        w-8
                        h-8
                        object-contain
                    "
                />


                <span
                    className="
                        text-xs
                        px-3
                        py-1
                        rounded-full
                        bg-green-50
                        text-green-600
                        font-medium
                    "
                >
                    {technology.badge}
                </span>


            </div>




            {/* Card Content */}
            <div className="flex-1">


                {/* Title */}
                <h2
                    className="
                        text-lg
                        font-bold
                        text-slate-900
                        mb-2
                    "
                >
                    {technology.name}
                </h2>




                {/* Description */}
                <p
                    className="
                        text-sm
                        text-slate-500
                        leading-relaxed
                        min-h-[55px]
                    "
                >
                    {technology.description}
                </p>





                {/* Category + Difficulty + Rating */}
                <div
                    className="
                        flex
                        justify-between
                        items-center
                        mt-5
                    "
                >


                    {/* Category + Difficulty */}
                    <div
                        className="
                            flex
                            gap-2
                        "
                    >

                        <span
                            className="
                                text-xs
                                px-2
                                py-1
                                rounded
                                bg-slate-100
                                text-slate-600
                            "
                        >
                            {technology.category}
                        </span>



                        <span
                            className="
                                text-xs
                                px-2
                                py-1
                                rounded
                                text-slate-600
                            "
                        >
                            {technology.difficulty}
                        </span>


                    </div>





                    {/* Rating */}
                    <span
                        className="
                            text-sm
                            text-yellow-500
                            whitespace-nowrap
                        "
                    >
                        ⭐ {technology.rating}
                    </span>


                </div>


            </div>






            {/* Button */}
            <button

                onClick={() => addToStack(technology)}

                className="
                    mt-5
                    w-full
                    h-10
                    rounded-lg
                    bg-slate-950
                    text-white
                    text-sm
                    font-medium
                    hover:bg-slate-800
                    transition
                "

            >

                Add to Stack

            </button>



        </div>
    );

};


export default TechnologyCard;