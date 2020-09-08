import React from 'react';


function Navbar(props){

  function change(){
    props.change(props.id)
  };

  return(
    <h5 onClick={change} className={props.id == props.selected && 'active-item'} id='nav-item'>
      {props.title}
    </h5>
  )
}

export default Navbar;
