import styles from './index.module.css'

export const Choose = () => {
  return (
    <div className={styles.data}>
      <section className={styles.text}>
        <div className={styles.h1}>
          <h2 className={styles.builtWithPurposeContainer}>
            <p className={styles.builtWithPurpose}>
              <span className={styles.builtWith}>{`Built with `}</span>
              <span className={styles.purpose}>Purpose</span>
              <span>.</span>
            </p>
            <p className={styles.builtWithPurpose}>
              <span>{`Backed by `}</span>
              <span className={styles.purpose}>Expertise.</span>
            </p>
          </h2>
        </div>
        <div className={styles.line}>
          <div className={styles.lineChild} />
        </div>
        <div className={styles.text1}>
          <p className={styles.weBuiltThis}>
            We develop sophisticated trading solutions designed specifically to
            exceed the stringent requirements of contemporary financial markets.
            Every feature, interface, and strategic decision is meticulously
            crafted based on authentic trading scenarios and continuous,
            expert-driven user feedback.
          </p>
        </div>
      </section>
      <section className={styles.blocks}>
        <div className={styles.featureItem}>
          <h1 className={styles.whyChooseOur}>
            Why choose our trading solution?
          </h1>
        </div>
        <div className={styles.featuresOverview}>
          <div className={styles.featureContainers}>
            <div className={styles.iconBackgrounds}>
              <div className={styles.iconBackgroundsChild} />
            </div>
            <div className={styles.featureDetails}>
              <div className={styles.featureDetailsChild} />
              <div className={styles.fullProductOwnership}>
                Complete product ownership ensures rapid innovation
              </div>
            </div>
          </div>
          <div className={styles.featureContainers}>
            <div className={styles.iconBackgrounds}>
              <div className={styles.iconBackgroundsChild} />
            </div>
            <div className={styles.featureDetails}>
              <div className={styles.featureDetailsChild} />
              <div className={styles.fullProductOwnership}>
                User-centric design with seamless UX
              </div>
            </div>
          </div>
          <div className={styles.featureContainers}>
            <div className={styles.iconBackgrounds}>
              <div className={styles.iconBackgroundsChild} />
            </div>
            <div className={styles.featureDetails}>
              <div className={styles.featureDetailsChild} />
              <div className={styles.fullProductOwnership}>
                Transparent roadmap with consistent development
              </div>
            </div>
          </div>
          <div className={styles.featureContainers}>
            <div className={styles.iconBackgrounds}>
              <div className={styles.iconBackgroundsChild} />
            </div>
            <div className={styles.featureDetails}>
              <div className={styles.featureDetailsChild} />
              <div className={styles.fullProductOwnership}>
                Reliable expert support directly from the creators
              </div>
            </div>
          </div>
          <div className={styles.featureContainers}>
            <div className={styles.iconBackgrounds}>
              <div className={styles.iconBackgroundsChild} />
            </div>
            <div className={styles.featureDetails}>
              <div className={styles.featureDetailsChild} />
              <div className={styles.fullProductOwnership}>
                Constant enhancement guided by real trading experience
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
