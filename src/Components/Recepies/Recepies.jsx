import { useLoaderData } from "react-router-dom";
import Recepie from "./Recepie";

const Recepies = () => {
  const recepies = useLoaderData();
//   console.log(recepies);
  return (
    <div className="container mx-auto my-10 font-semibold">
      <h1 className="text-5xl ml-7">Recepies: {recepies.meals.length}</h1>
      <div  className="grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-8">
        {
            recepies.meals.map(recepie => <Recepie key={recepie.idMeal} recepie={recepie}></Recepie>)
        }
      </div>
    </div>
  );
};

export default Recepies;
