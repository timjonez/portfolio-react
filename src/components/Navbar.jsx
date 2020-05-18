import React from 'react';


function Navbar(props){

  function change(){
    props.change(props.id)
  };

  return(
    <h3 onClick={change}>
      {props.title}
    </h3>
  )
}

export default Navbar;
