import React from 'react';


function Navbar(props){

  function change(){
    props.change(props.id)
  };

  return(
    <h3 onClick={change} className={props.id == props.selected && 'active'}>
      {props.title}
    </h3>
  )
}

export default Navbar;
