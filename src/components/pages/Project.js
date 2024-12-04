import { parse, v4 as uuidv4 } from 'uuid'

import styles from './Project.module.css'

import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Loading from '../layouts/Loading'
import Container from '../layouts/Container'
import Message from '../layouts/Message'
import ProjectForm from '../project/ProjectForm'
import ServiceForm  from '../service/ServiceForm'
import ServiceCard from '../service/ServiceCard'

function Project(){

    const {id} = useParams()
    const [project, setProject] = useState([])
    const [showProjectForm, setShowProjectForm] = useState(true)
    const [showServiceForm, setShowServiceForm] = useState(true)
    const [services, setServices] = useState([])
    const [message, setMessage] = useState('')
    const [type, setType] = useState()

    useEffect(() => {
      setTimeout(() => {
        fetch(`http://localhost:5000/projects/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
         .then((resp) => resp.json())
          .then((data) => {
            setProject(data)
            setServices(data.services || [])
          })
          .catch((err) => console.log)
      }, 300)
     }, [id])

     function editPost(project){
        setMessage('')

        if(project.budget < project.cost){
          setMessage('The budget cannot be less than the project cost!')
          setType('error')
          return false
        }
        fetch(`http://localhost:5000/projects/${project.id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type' : 'application/json',
          },
          body: JSON.stringify(project),
        })
        .then(resp => resp.json())
        .then((data) =>  {

          setProject(data)
          setShowProjectForm(true)
          setMessage('Updated project!')
          setType('success')

        })
        .catch(err => console.log(err))
     }

     function createService(project) {
      // last service
      const lastService = project.services[project.services.length - 1]
  
      lastService.id = uuidv4()
  
      const lastServiceCost = lastService.cost
  
      const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost)
  
      if (newCost > parseFloat(project.budget)) {
        setMessage('Budget exceeded, check the value of the service!')
        setType('error')
        project.services.pop()
        return false
      }
  
      project.cost = newCost
  
      fetch(`http://localhost:5000/projects/${project.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(project),
      })
        .then((resp) => resp.json())
        .then((data) => {
          setServices(data.services)
          setShowServiceForm(!showServiceForm)
          setMessage('Added service!')
          setType('success')
        })
    }

    function removeService(id, cost ){

      setMessage('')

      const servicesUpdate = project.services.filter(
        (service) => service.id !== id
      )

      const projectUpdated = project

      projectUpdated.services = servicesUpdate
      projectUpdated.cost = parseFloat(projectUpdated.cost) - parseFloat(cost)

      fetch(`http://localhost:5000/projects/${projectUpdated.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json' 
         },
         body: JSON.stringify(projectUpdated)
      }).then((resp) => resp.json())
      .then((data) => {
        setProject(projectUpdated)
        setServices(servicesUpdate)
        setMessage('Service removed successfully!')
        setType('success')
      })
      .catch(err => console.log(err))
    }
  

     function toggleProjectForm(){
        setShowProjectForm(!showProjectForm)
     }
     function toggleServiceForm(){
      setShowServiceForm(!showServiceForm)
   }

    return(
        <>{project.name ? 
          (
            <div className={styles.project_details}>
              <Container customClass="column">
                {message && <Message type={type} msg={message} />}
                <div className={styles.details_container}>
                  <h1>Project: {project.name}</h1>
                  <button className={styles.btn} onClick={toggleProjectForm}>
                    {!showProjectForm ? 'Close' : 'Edit Project'}
                    </button>
                    {!showProjectForm ?(
                      <div className={styles.projectInfo}>
                      <ProjectForm handleSubmit={editPost} btnText="Finish editing" projectData={project} />
                    </div>
                    ) : (
                      <div className={styles.projectInfo}>
                       <p>
                        <span>Category: </span> {project.category.name}
                      </p>
                      <p>
                        <span>Total budget: </span> ${project.budget}
                      </p>
                      <p>
                        <span>Total used:</span> ${project.cost}
                      </p>

                    </div>
                    )}
                </div>
                <div className={styles.service_form_container}>
                    <h2>Add a service:</h2>
                    <button className={styles.btn} onClick={toggleServiceForm}>
                    {!showServiceForm ? 'Close' : 'Add a Service'}
                    </button>
                    <div className={styles.projectInfo}>
                        { !showServiceForm && ( <ServiceForm 
                          handleSubmit={createService}
                          btnText="Add service"
                          projectData={project}
                        /> )}
                    </div>
                </div>
                <h2>Services</h2>
                  <Container customClass="space">
                 
                  {services.length > 0 &&
                services.map((service) => (
                  <ServiceCard
                    id={service.id}
                    name={service.name}
                    cost={service.cost}
                    description={service.description}
                    key={service.id}
                    handleRemove={removeService}
                  />
                ))}
                  {services.length === 0 && <p>There are no registered services</p>}
              </Container>
              </Container >
            </div>
          )
          : ( 
            <div className={styles.Project}>
               <Loading />
               </div>)} </>)
}



export default Project