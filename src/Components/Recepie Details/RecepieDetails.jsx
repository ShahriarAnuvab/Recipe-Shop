import { useLoaderData } from "react-router-dom";
import ShowDetails from "./ShowDetails";

const RecepieDetails = () => {
    const details = useLoaderData()
    // console.log(details)
    return (
        <div className="">
            {
                details.meals.map(detail => <ShowDetails key={detail.idMeal} detail={detail}> </ShowDetails> )
            }
        </div>
    );
};

export default RecepieDetails;