import { Technology } from "../types/technologies";


interface Props {

    technology: Technology;
    addToStack: (technology: Technology) => void;

}

const TechnologyCard = ({
    technology,
    addToStack
}: Props) => {


    return (

        <div className="technology-card">
            <div className="card-top">
                <span>{technology.badge}</span>

            </div>
            <h3>{technology.name}</h3>
            <p>{technology.description}</p>

            <div className="card-info">
                <small>{technology.category}</small>

                <small>{technology.difficulty}</small>

                <small>⭐ {technology.rating}</small>

            </div>


            <button onClick={() => addToStack(technology)}>
                Add to Stack
            </button>
        </div>
    )
}
export default TechnologyCard;