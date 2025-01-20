import React from 'react';
import styles from './Footer.module.css';


function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.logoContainer}>
                <img src="../../img/LogoMain.png" alt="Logo alura" className={styles.logoImage} />
            </div>
            
            <div className={styles.developerInfo}>
                <h3>Desarrollado por Cristian C.</h3>

                <p> © 2025 Todos los derechos reservados</p>
            </div>
            
        </footer>
    );
}

export default Footer;