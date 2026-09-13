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

        <div className="border rounded-xl p-5 h-fit bg-white border-slate-200">
            <h2 className="text-xl font-bold text-slate-900">Your Stack</h2>

            <p className="text-sm text-slate-900 mb-5">{stack.length} Technology Selected</p>

            {stack.map(item => (

                <div
                    key={item.id} className="border rounded-lg p-3 mb-3 flex justify-between border-slate-400">

                    <div>

                        <h3 className="font-semibold text-slate-900">

                            {item.name}

                        </h3>


                        <p className="text-xs text-slate-900">

                            {item.category}

                        </p>


                    </div>

                    <button
                        onClick={() => removeTechnology(item.id)} className="bg-black"
                    >
                        ✕
                    </button>

                </div>

            ))

            }

            <button onClick={removeAll} className="btn btn-outline btn-error w-full mt-5">
                Remove All
            </button>
        </div>


    )

}


export default StackSidebar;