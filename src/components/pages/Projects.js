import { data, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

import styles from './Projects.module.css'

import Message from '../layouts/Message'
import Container from '../layouts/Container'
import Loading from '../layouts/Loading'
import LinkButton from '../layouts/LinkButton';
import ProjectCard from '../project/ProjectCard';

function Projects() {

    const [projects, setProjects] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)

    const location = useLocation()
    let message = ''
    if(location.state){
        message = location.state.message
    }

    useEffect(() => {
        setTimeout(
            () => {
                fetch('http://localhost:5000/projects', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                }).then(resp => resp.json())
                .then(data => {
                    console.log(data)
                    setProjects(data)
                    setRemoveLoading(true)
                })
                .catch((err) => console.log(err))
            }, 1000)
    }, [])

    return (
        <div className={styles.Projects}>
            <div>
                <h1>My Projects</h1>
                <LinkButton to="/newproject" text="Create Project" />
            </div>
            {message && <Message type="success" msg={message} />}
            <Container customClass="start">
            {projects
                .filter(project => project.category)
                .map((project) => (
                    <ProjectCard 
                        id={project.id}
                        name={project.name} 
                        budget={project.budget}
                        category={project.category.name}
                        key={project.id}
                    /> 
                ))}
                {!removeLoading && <Loading />}
                {removeLoading && projects.lenght == 0 &&
                    <p>Não há projetos cadastrados</p>
                }
            </Container>
        </div>
    )
}
export default Projects