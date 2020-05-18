import React from 'react';
import Project from './components/Project.jsx'
import Tech from './components/Tech.jsx'
import Navbar from './components/Navbar.jsx'
import projects from './projects.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'


function App() {

  const [selected, setSelected] = React.useState(1);

  function changeSelected(page){
    console.log(page)
  };

  return(
    <Container fluid='md'>
     <Row>
      <Col xs={2} className='skills'>
      {projects.map(project => (
        <Tech
          key={project.key}
          id={project.key}
          tech={project.tech}
        />
      ))}
      </Col>

      <Col xs={7} className='project'>
        {projects.map(project => (
          <Project
            key={project.key}
            id={project.key}
            title={project.title}
            body={project.body}
            demoLink={project.demoLink}
            codeLink={project.githubLink}
          />
        ))}
       </Col>
       <Col xs={2} className='main-nav' >
          {projects.map(project => (
            <Navbar
            key={project.key}
            id={project.key}
            title={project.title}
            selected={selected}
            change={changeSelected}
            />
          ))}
      </Col>
     </Row>
    </Container>
  )
}

export default App;
