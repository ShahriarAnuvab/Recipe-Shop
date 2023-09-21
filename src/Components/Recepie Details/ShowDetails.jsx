import PropTypes from 'prop-types';
import { TbCircleDot } from 'react-icons/tb';
const ShowDetails = ({detail}) => {
    console.log(detail)
    return (
        <div className='container mx-auto my-10 bg-base-100 shadow-xl'>
        <div className='flex justify-center items-center my-5 bg-base-100 shadow-xl p-5 flex-col'>
        <h1 className='text-3xl font-semibold text-center my-5'>{detail.strMeal}</h1>
        <img src={detail.strMealThumb} alt={detail.strMeal} />
        </div>
        <div className='my-5 bg-base-100 shadow-xl p-5 space-y-7'>
        <p className='text-2xl font-semibold'>Category: <span className='font-normal'>{detail.strCategory}</span></p>
        <p className='text-2xl font-semibold'>Area:<span className='font-normal'> {detail.strArea}</span> </p>
        <p className='text-2xl font-semibold'>Instructions: <span className='font-normal'>{detail.strInstructions}</span></p>
        
  
      <div>
        <p className='text-2xl font-semibold'>You Will Need:</p>
      <ul>
          {Object.keys(detail).map((key) => {
           
            if (key.startsWith("strIngredient") && detail[key]) {
              const ingredientNumber = key.replace("strIngredient", "");
            //   console.log(ingredientNumber)
              const measureKey = `strMeasure${ingredientNumber}`;
              console.log(measureKey)
              return (
                
                <p className='text-lg flex items-center my-2 gap-2'  key={key}> <TbCircleDot></TbCircleDot>
                  {detail[key]} - {detail[measureKey]}
                </p>
              );
            }
            return null;
          })}
        </ul>
      </div>

        <p className='md:text-2xl font-semibold'>Tags: <a className='font-normal' href="#">  {detail.strTags}</a></p>
        <p>
          <a className='text-blue-700 underline' href={detail.strYoutube} target="_blank" rel="noopener noreferrer">
            Watch on YouTube
          </a>
        </p>
        </div>
      </div>
    );
};
ShowDetails.propTypes = {
    detail: PropTypes.object.isRequired
  };

export default ShowDetails;