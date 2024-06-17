import React from 'react'
// we can destructure on the fly as well {name}, abd use name variable directly
import { useState } from 'react'

const User = (props) => {

    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

  return (
    <div className='user-card p-5 border border-black mx-5 my-1    0'>
        <h1>Count = {count}</h1>
        <h2>Name: {props.name}</h2>
        <h3>Location: New Delhi</h3>
        <h4>Contact: tarunjhamb9927@gmail.com</h4>
    </div>
  )
}

export default User