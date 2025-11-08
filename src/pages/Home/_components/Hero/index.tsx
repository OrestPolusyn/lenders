import styles from './index.module.css'

export const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className='container'>
        <div>
          <p>Smart Loans For Bright Future</p>
        </div>
        <h1>Personal Loans To Fulfill Your Dreams</h1>
        <p>
          We provide flexible loan solutions tailored to your needs. Whether
          you're buying your first home or refinancing, we're here to help you
          achieve your financial goals.
        </p>
      </div>
    </div>
  )
}
