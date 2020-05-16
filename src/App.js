import React from 'react';
import Project from './components/Project.jsx'
import Tech from './components/Tech.jsx'
import projects from './projects.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function App() {
  return(
    <Container fluid='md'>
     <Row>
      <Col xs={3}>
      {projects.map(project => (
        <Tech
          key={project.key}
          id={project.key}
          tech={project.tech}
        />
      ))}
      </Col>

      <Col xs={7}>
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
       <Col xs={2}>

      </Col>
     </Row>
    </Container>
  )
}

export default App;
