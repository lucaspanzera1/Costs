import styles from './Login.module.css'
import logo from '../../img/costs_logo.png'

function Login(){
    return(
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.logo}>
                        <span><img src={logo} alt="Costs"/> Costs</span>
                        <h1>Bem-vindo</h1>
                        <p>A Costs é uma plataforma de gestão financeira dos seus projetos.</p>
                        <button className={styles.loginButton}><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor"
                        fill="none" stroke-width="2">
                        <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                        <polyline points="10 17 15 12 10 7" />
                        <line x1="15" y1="12" x2="3" y2="12" />
                    </svg> Login ou Registre-se</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login