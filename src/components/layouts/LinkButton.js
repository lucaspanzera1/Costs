import { Link } from 'react-router-dom';
import styles from './LinkButton.module.css';
import projectsIcon from '../../img/costs_logo.png';

function LinkButton({ to, text, icon }) {
    return (
        <Link to={to} className={styles.button}>
            <img src={projectsIcon} alt="Projects" className={styles.icon} />
            {text}
        </Link>
    );
}

export default LinkButton;

