import { ToastContainer } from 'react-toastify'
import styles from './index.module.css'

export const Contact = () => {
  // const [isSending, setIsSending] = useState(false)
  // const methods = useForm<ContactFormData>({
  //   resolver: zodResolver(contactFormSchema),
  //   defaultValues: {
  //     fullName: '',
  //     email: '',
  //     phoneNumber: '',
  //     company: '',
  //     yourQuestions: '',
  //   },
  // })

  // const {
  //   handleSubmit,
  //   formState: { errors },
  // } = methods

  // const onSubmit = () => {
  //   setIsSending(prev => !prev)
  //   setTimeout(() => {
  //     toast.success('Message sent successfully!', {
  //       position: 'top-right',
  //       autoClose: 3000,
  //       hideProgressBar: false,
  //       closeOnClick: false,
  //       pauseOnHover: false,
  //       draggable: false,
  //       progress: undefined,
  //       theme: 'light',
  //       transition: Bounce,
  //     })

  //     setIsSending(prev => !prev)
  //   }, 1000)
  // }

  return (
    <div className={styles.data}>
      <section className={styles.text}>
        <div className={styles.h1}>
          <h1 className={styles.getInTouchContainer}>
            <span>{`Get in touch `}</span>
            <span className={styles.withUs}>with us</span>
            <span> today!</span>
          </h1>
        </div>
        <div className={styles.line}>
          <div className={styles.lineChild} />
        </div>
        <div className={styles.text1}>
          <div className={styles.scheduleADemoContainer}>
            <p className={styles.scheduleADemo}>
              Schedule a demo, ask us questions, or just reach out — we’re here
              to help you understand how our product can deliver real impact for
              your team. It’s more than software. It’s our craft.
            </p>
          </div>
        </div>
      </section>
      {/* <FormProvider {...methods}>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.form1}>
              <div className={styles.form2}>
                <div className={styles.fullName}>
                  <div className={styles.h2}>
                    <div className={styles.fullName1}>Full Name *</div>
                  </div>
                  <TextFieldRHF
                    name='fullName'
                    type='text'
                    placeholder='Enter Name'
                  />
                  {errors.fullName && (
                    <div className={styles.errorMessage}>
                      {errors.fullName.message}
                    </div>
                  )}
                </div>
                <div className={styles.fullName}>
                  <div className={styles.h2}>
                    <div className={styles.fullName1}>Email *</div>
                  </div>
                  <TextFieldRHF
                    name='email'
                    type='email'
                    placeholder='Enter Email'
                  />
                  {errors.email && (
                    <div className={styles.errorMessage}>
                      {errors.email.message}
                    </div>
                  )}
                </div>
                <div className={styles.fullName}>
                  <div className={styles.h2}>
                    <div className={styles.fullName1}>Phone Number</div>
                  </div>
                  <TextFieldRHF
                    name='phoneNumber'
                    type='tel'
                    placeholder='Enter Phone Number'
                  />
                  {errors.phoneNumber && (
                    <div className={styles.errorMessage}>
                      {errors.phoneNumber.message}
                    </div>
                  )}
                </div>
                <div className={styles.fullName}>
                  <div className={styles.h2}>
                    <div className={styles.fullName1}>Company</div>
                  </div>
                  <TextFieldRHF
                    name='company'
                    type='text'
                    placeholder='Enter Company Name'
                  />
                  {errors.company && (
                    <div className={styles.errorMessage}>
                      {errors.company.message}
                    </div>
                  )}
                </div>
              </div>
              <div className={styles.yourQuestions}>
                <div className={styles.h2}>
                  <div className={styles.fullName1}>Your Questions</div>
                </div>
                <TextFieldRHF
                  typeInput='textarea'
                  name='yourQuestions'
                  type='text'
                  placeholder='Describe the essence of the question'
                />
                {errors.yourQuestions && (
                  <div className={styles.errorMessage}>
                    {errors.yourQuestions.message}
                  </div>
                )}
              </div>
            </div>
            <button
              className={styles.button}
              type='submit'
              disabled={isSending}
            >
              <div className={styles.send}>
                {isSending ? 'Sending...' : 'Send'}
              </div>
            </button>
          </form>
        </FormProvider> */}

      <div className={styles.ourEmailParent}>
        <h1 className={styles.ourEmail}>Contact Us</h1>
        <div className={styles.solidShape} />

        <address className={styles.address}>
          <p style={{ fontWeight: 600 }}>NABUTO FZ-LLC</p>
          <p>
            Registration number: 105092 Address: Office 111, Building 13, Dubai
          </p>
          <p>Internet City, Dubai, United Arab Emirates</p>

          <p>
            Phone:{' '}
            <a
              style={{ color: 'var(--color-green-400)' }}
              href='tel:+971526721120'
            >
              +971 52 672 11 20
            </a>
          </p>
        </address>

        <a href='mailto:info@nabuto.net' className={styles.frameParent}>
          <div className={styles.frameChildIcon}>
            <svg
              width='25'
              height='18'
              viewBox='0 0 25 18'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M21.2061 0.00488281C23.3194 0.112115 25 1.85996 25 4V14C25 16.2091 23.2091 18 21 18H4C1.85996 18 0.112115 16.3194 0.00488281 14.2061L0 14V4C0 1.85996 1.68056 0.112115 3.79395 0.00488281L4 0H21L21.2061 0.00488281ZM2.14551 3.25195C2.05217 3.48312 2 3.7354 2 4V14C2 15.1046 2.89543 16 4 16H21C22.1046 16 23 15.1046 23 14V4C23 3.74195 22.9493 3.49601 22.8604 3.26953L13.2451 10.7881L12.6367 11.2637L12.0225 10.7949L2.14551 3.25195ZM3.81543 2.00879L12.6221 8.73535L21.2188 2.0127C21.1469 2.00487 21.074 2 21 2H4C3.93776 2 3.87622 2.00323 3.81543 2.00879Z'
                fill='#262829'
              />
            </svg>
          </div>
          <div className={styles.infonabutonet}>info@nabuto.net</div>
        </a>
      </div>

      <ToastContainer />
    </div>
  )
}
