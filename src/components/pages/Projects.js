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
    const [projectMessage, setProjectMessage] = useState('')

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
            }, 300)
    }, [])

    function removeProject(id){

        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(resp => resp.json())
          .then(data => {
            setProjects(projects.filter((project) => project.id !== id))
            setProjectMessage('Project removed successfully!')
          }) 
          .catch(err => console.log(err))

    }

    return (
        <div className={styles.Projects}>
            <div className={styles.titleContainer}>
                <h1>My Projects</h1>
                <LinkButton customClass={styles.btnProjects} to="/newproject" text="Create Project"/>
            </div>
            {message && <Message type="success" msg={message} />}
            {projectMessage && <Message type="success" msg={projectMessage} />}
            <Container customClass="space">
            {projects
                .filter(project => project.category)
                .map((project) => (
                    <ProjectCard 
                        id={project.id}
                        name={project.name} 
                        budget={project.budget}
                        category={project.category.name}
                        key={project.id}
                        handleRemove={removeProject}
                    /> 
                ))}
                {!removeLoading && <Loading />}
                {removeLoading && projects.lenght == 0 &&
                    <p>There are no registered projects.</p>
                }
            </Container>
        </div>
    )
}
export default Projects