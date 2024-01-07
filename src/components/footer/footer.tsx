import styles from './footer.module.css'

const Footer = () => {
    return (
        <section className={styles.container}>
            <div className={styles.logo}>Faris</div>
            <div className={styles.text}>
                Faris creative thoughts agency. © All rights reserved.
            </div>
        </section>
    )
}

export default Footer