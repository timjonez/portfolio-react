import React from 'react';
import Project from './components/Project.jsx';
import Tech from './components/Tech.jsx';
import Navbar from './components/Navbar.jsx';
import HomeSlide from './components/HomeSlide.jsx';
import Profile from './components/Profile';
import Resume from './components/Resume.jsx'
import projects from './projects.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';


function App() {

  const [selected, setSelected] = React.useState(0);

  function changeSelected(page){
    console.log(page)
    setSelected(page)
  };

  return(
    <Container fluid='md'>
     <Row>
     {selected == 0 ?
        <Col xs={2} className='about-card'>
          <Profile />
        </Col>:
        <Col xs={2} className='skills'>
        {projects.filter(projects => projects.key == selected).map(project =>
          <Tech
            key={project.key}
            id={project.key}
            tech={project.tech}
          />
        )}
        </Col>
      }


      <Col xs={7} className='project'>
        {selected == 0 && <HomeSlide />}
        {selected == 4 && <Resume />}
        {projects.filter(projects => projects.key == selected).map(project =>
          <Project
            key={project.key}
            id={project.key}
            title={project.title}
            body={project.body}
            demoLink={project.demoLink}
            codeLink={project.githubLink}
          />
        )}
       </Col>
       <Col xs={2} className='main-nav' >
          <h5  id='nav-item' onClick={() => changeSelected(0)} className={selected == 0 && 'active-item' } >Home</h5>
          {projects.map(project => (
            <Navbar
            key={project.key}
            id={project.key}
            title={project.title}
            selected={selected}
            change={changeSelected}
            />
          ))}
          <h5  id='nav-item' onClick={() => changeSelected(4)} className={selected == 4 && 'active-item' } >Resume</h5>
      </Col>
     </Row>
    </Container>
  )
}

export default App;
