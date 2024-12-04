import styles from './Company.module.css'
import logo from '../../img/costs_logo.png'
import pfp from '../../img/pfp.jpg'
import react_logo from '../../img/logo.svg'

function Company() {
    return (
        <>
        <div className={styles.Company}>
            <img src={logo} alt="Costs" className={styles.logo}/>
            <div>
                <h1>Costs</h1>
                <h2>Project management and financial control.</h2>
            </div>
        </div>

        <div className={styles.LucasPanzera}>
            <div className={styles.card}>
                <a href="https://lucaspanzera.vercel.app" target="_blank" >
                    <img 
                src={pfp} 
                alt="Lucas Panzera" 
                className={styles.profileImage}
                /></a>
                <h1 className={styles.name}>Lucas Panzera</h1>
                <p className={styles.title}>Desenvolvedor</p>
                
                <div className={styles.socialIcons}>
                <a href="https://github.com/lucaspanzera1" target="_blank" aria-label="GitHub" className={styles.iconLink}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                    </a>
                    <a href="https://linkedin.com/in/lucas-panzera" target="_blank" aria-label="LinkedIn" className={styles.iconLink}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect x="2" y="9" width="4" height="12"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                    </a>
                    <a href="mailto:lucassouzapanzera@outlook.com" aria-label="Email" className={styles.iconLink}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                    </a>
                </div>
                
                <footer className={styles.footer}>
                <p>code by Lucas Panzera</p>
                </footer>
            </div>

            <div>
                <p className={styles.p_img}>Projeto criado com foco em aprender fundamentos em React. <img src={react_logo} alt="Lucas Panzera" className={styles.reactImage}/></p>
                <p>Estudando com o <a href="https://youtube.com/playlist?list=PLnDvRpP8BneyVA0SZ2okm-QBojomniQVO&si=2mS54RCKLhv6rcF0" target="_blank" >Curso de React</a> por <a href="https://www.youtube.com/@MatheusBattisti" target="_blank" >Matheus Battisti - Hora de Codar</a></p>
            </div>
    </div>

        </>
    )
}
export default Company