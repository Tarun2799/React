import React, { useState } from 'react'
import ItemList from './ItemList';
import ShimmerList from './ShimmerList';

const RestaurantCategory = ({data, showItems, setShowIndex}) => {

  // IMP INTERVIEW: we want to give the state(control) showitem to the PARENT lifting the State Up to ResMenu. So, now this component is controlled component now. When ResCategory has it's own state it was an unControlled component. 
  // const [showItems, setShowItems] = useState(false);

  // // console.log(data)
   const handleCLick = () => {
  //   setShowItems(!showItems); //toggle feature
      setShowIndex();
   }

  return (
    <div>
        {/* Header */}
        <div className='w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4 '>
            <div className='px-2 flex justify-between cursor-pointer ' onClick={handleCLick}>
                <span className='font-semibold text-lg'>{data.title} ({data.itemCards.length})</span>
                <span>⬇️</span>
            </div>
            {/* Accordian body */}
            {showItems && <ItemList items={data.itemCards}/>}
        </div>
    </div>
  )
}

export default RestaurantCategory;