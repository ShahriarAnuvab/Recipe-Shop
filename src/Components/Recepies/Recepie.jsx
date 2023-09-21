import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Recepie = ({ recepie }) => {
  const {strMeal, strMealThumb, idMeal} = recepie;
//   console.log(strMeal, strMealThumb);
  return (
    <div className='container mx-auto'>

        <div className="card card-compact lg:w-96  bg-base-100 shadow-xl">
          <figure>
            <img className='p-5'
              src={strMealThumb}
              alt={strMeal}
            />
          </figure>
          <div className="card-body">
            <div className=''>
            <p className='text-2xl'>{strMeal}</p>
            </div>
            <div className="card-actions justify-end ">
             <Link to={`/recepies/${idMeal}`}>See Details</Link>
            </div>
          </div>
        </div>
      </div>

  );
};
Recepie.propTypes = {
    recepie: PropTypes.object.isRequired
  };
export default Recepie;
