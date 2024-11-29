import styles from './SubmitButton.module.css'
import projectsIcon from '../../img/costs_logo.png';

function SubmitButton({ text }){
    return(
        <div>
            <button className={styles.button}>
                <img src={projectsIcon} alt="Projects" className={styles.icon} />
                {text}
            </button>
        </div>
    )
}
export default SubmitButton