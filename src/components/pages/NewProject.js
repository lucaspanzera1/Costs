import styles from './NewProject.module.css'

import ProjectForm from '../project/ProjectForm'

import { useNavigate } from 'react-router-dom'

function NewProject() {
  const navigate = useNavigate()

  function createPost(project) {
    // initialize cost and services
    project.cost = 0
    project.services = []

    fetch('http://localhost:5000/projects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        navigate('/projects', { state: { message: 'Project created successfully!' } })
      })
  }
 
    return (
        <div className={styles.newProject}>
            <h1>Create Project</h1>
            <p>Create your project and then add the services</p>
            <ProjectForm handleSubmit={createPost} btnText="Create project"/>
        </div>
    )
}
export default NewProject