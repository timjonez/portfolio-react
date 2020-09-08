import React from 'react';
import Tech from './Tech.jsx';
import About from './About.jsx';

function Project(props) {
  return(
    <div>
        <About
          id={props.id}
          title={props.title}
          body={props.body}
          demoLink={props.demoLink}
          codeLink={props.codeLink}
        />
        <div class="project-links">
            <a class="btn btn-primary" href={props.demoLink}>Live Demo</a>
            &nbsp;
            <a class="btn btn-primary" href={props.codeLink}>Github</a>
       </div>
  </div>
  )
}

export default Project;
