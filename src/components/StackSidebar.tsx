import type { ITechnology } from "../types/technologies";


interface Props {

    stack: ITechnology[];

    removeTechnology: (id: string) => void;

    removeAll: () => void;

}



const StackSidebar = ({
    stack,
    removeTechnology,
    removeAll

}: Props) => {


    return (

        <div
            className="
                bg-white
                border
                border-slate-200
                rounded-2xl
                p-7
                h-fit
                shadow-sm
            "
        >


            {/* Header */}
            <h2
                className="
                    text-2xl
                    font-bold
                    text-slate-900
                    mb-1
                "
            >
                Your Stack
            </h2>



            <p
                className="
                    text-sm
                    text-slate-400
                    mb-6
                "
            >
                {stack.length} Technology Selected
            </p>





            {/* Selected Technologies */}
            {
                stack.map(item => (

                    <div
                        key={item.id}
                        className="
                            flex
                            items-center
                            justify-between
                            border
                            border-slate-200
                            rounded-xl
                            p-4
                            mb-3
                            bg-white
                        "
                    >


                        {/* Technology Info */}
                        <div
                            className="
                                flex
                                items-center
                                gap-4
                            "
                        >


                            <img
                                src={item.icon}
                                alt={item.name}
                                className="
                                    w-10
                                    h-10
                                    object-contain
                                "
                            />



                            <div>


                                <h3
                                    className="
                                        text-base
                                        font-bold
                                        text-slate-900
                                    "
                                >
                                    {item.name}
                                </h3>



                                <p
                                    className="
                                        text-xs
                                        text-slate-400
                                    "
                                >
                                    {item.category}
                                </p>


                            </div>


                        </div>





                        {/* Remove Button */}
                        <button

                            onClick={() => removeTechnology(item.id)}

                            className="
                                text-3xl
                                font-light
                                text-slate-400
                                hover:text-slate-700
                                transition
                                leading-none
                            "

                        >
                            ×

                        </button>



                    </div>


                ))
            }






            {/* Remove All Button */}
            <button

                onClick={removeAll}

                className="
                    mt-8
                    w-full
                    h-12
                    rounded-lg
                    border
                    border-red-300
                    text-red-500
                    bg-white
                    font-semibold
                    hover:bg-red-50
                    transition
                "

            >

                Remove All

            </button>


        </div>

    )

}


export default StackSidebar;