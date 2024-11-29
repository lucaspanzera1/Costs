import styles from './Home.module.css'
import savings from '../../img/savings.svg'
import projectsIcon from '../../img/costs_logo.png';

function Home() {
    return (
      <div className={styles.home}>
        <div className={styles.container}>
          <div className={styles.heroSection}>
            <h1 className={styles.title}>Manage Your Projects and Finances</h1>
            <p className={styles.description}>
              A simple and intuitive platform to streamline your project management and financial control.
            </p>
            <div className={styles.buttons}>
              <a href="/projects" className={styles.button}>
                <img src={projectsIcon} alt="Projects" className={styles.icon} />
                View Projects
              </a>
            </div>
          </div>
          <div className={styles.illustrationContainer}>
            <img src={savings} />
          </div>
        </div>
      </div>
    );
  }
  
  export default Home;