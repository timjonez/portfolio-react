import React from 'react';


function Tech(props){

  const items = props.tech

  return(
    <div className='skills'>
      <h1>Tech</h1>
      <ul>
      {items.map(entry =>(
        <li>{entry}</li>
      ))}
      </ul>
    </div>
  )
}

export default Tech;
