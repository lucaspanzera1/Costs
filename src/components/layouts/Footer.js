import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'

import styles from './Footer.module.css'

function Footer(){
    return ( <footer className={styles.footer}>
        <ul className={styles.socialList}>
            <li>
                <a href='https://www.instagram.com/lucaspanzera/' target="_blank"><FaInstagram /></a>
            </li>
            <li>
                <a href='https://www.linkedin.com/in/lucas-panzera/' target="_blank"><FaLinkedin /></a>
            </li>
        </ul>
        <p className={styles.copyRight}><span>Lucas Panzera</span> &copy; 2024</p>
    </footer>
    )
}

export default Footer