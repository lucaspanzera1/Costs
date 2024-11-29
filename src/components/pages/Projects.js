import { useLocation } from 'react-router-dom'

import styles from './Projects.module.css'

import Message from '../layouts/Message'

function Projects() {

    const location = useLocation()
    let message = ''
    if(location.state){
        message = location.state.message
    }

    return (
        <div className={styles.Projects}>
            <h1>My Projects</h1>
            {message && <Message type="success" msg={message} />}
        </div>
    )
}
export default Projects