import styles from './index.module.css'

export const About = () => {
  return (
    <div className={styles.data}>
      <section className={styles.h1}>
        <h1 className={styles.wereNotAContainer}>
          <p className={styles.wereNotA}>We Don’t Sell Services</p>
          <p className={styles.wereNotA}>
            <span>{`We Build Visionary `}</span>
            <span className={styles.incredibleProduct}>Trading Solutions</span>
          </p>
        </h1>
      </section>
      <div className={styles.line}>
        <div className={styles.lineChild} />
      </div>
      <section className={styles.text}>
        <div className={styles.atOurCoreWeAreCreatorsWrapper}>
          <div className={styles.atOurCoreContainer}>
            <p className={styles.wereNotA}>
              We are product-first by nature. Our focus is on developing and
              scaling comprehensive trading ecosystems—dynamic, adaptable, and
              tailored precisely for financial markets. With a team grounded in
              engineering excellence, strategic product thinking, and extensive
              market knowledge, we craft intuitive solutions that address
              real-world trading, account management, and risk management
              challenges.
            </p>
          </div>
        </div>
        <div className={styles.weBelieveInFullOwnershipWrapper}>
          <div className={styles.atOurCoreContainer}>
            <p className={styles.wereNotA}>
              We believe in complete ownership, enabling rapid delivery,
              outstanding quality, and enduring commitment. Our goal? To create
              powerful, scalable trading solutions—developed meticulously—and
              deliver world-class software that evolves effortlessly with your
              business.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
