import styles from './Home.module.css'
import savings from '../../img/savings.svg'

import LinkButton from '../layouts/LinkButton';

function Home() {
    return (
      <div className={styles.home}>
        <div className={styles.container}>
          <div className={styles.heroSection}>
            <h1 className={styles.title}>Manage Your Projects and Finances</h1>
            <p className={styles.description}>
              A simple and intuitive platform to streamline your project management and financial control.
            </p>
           <LinkButton to="/newproject" text="Create Project" />
          </div>
          <div className={styles.illustrationContainer}>
            <img src={savings} alt='Costs' />
          </div>
        </div>
      </div>
    );
  }
  
  export default Home;