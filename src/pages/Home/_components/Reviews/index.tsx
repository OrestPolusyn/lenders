import { useState } from 'react'
import reviewsImage from '@/assets/images/home/happy-customers.jpg'
import secondReviewsImage from '@/assets/images/home/total-funded.jpg'
import thirdReviewsImage from '@/assets/images/home/approval-rate.jpg'
import avatar1 from '@/assets/images/home/avatar-1.png'
import avatar2 from '@/assets/images/home/avatar-2.png'
import avatar3 from '@/assets/images/home/happy-customers.jpg'

import { Link } from 'react-router-dom'
import styles from './index.module.css'
import sliderStyles from './ReviewsSlider.module.css'

type Review = {
  id: number
  text: string
  author: string
  role: string
  rating: number
}

const reviews: Review[] = [
  {
    id: 1,
    text: "Working with this team made our dream home a reality. The entire process was smooth, transparent, and faster than we expected. They found us the perfect loan program with an incredible rate!",
    author: "Sarah Johnson",
    role: "First-Time Homebuyer",
    rating: 5,
  },
  {
    id: 2,
    text: "The mortgage process can be overwhelming, but this team guided us every step of the way. Their expertise and personalized approach made all the difference. Highly recommend!",
    author: "Michael Chen",
    role: "Real Estate Investor",
    rating: 5,
  },
  {
    id: 3,
    text: "As a self-employed professional, I thought getting a mortgage would be impossible. This team found creative solutions and got us approved with great terms. Truly exceptional service!",
    author: "Emily Rodriguez",
    role: "Small Business Owner",
    rating: 5,
  },
]

const avatars = [avatar1, avatar2, avatar3]

export const Reviews = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % reviews.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const currentReview = reviews[currentSlide]

  return (
    <section className={styles.homeReviews}>
      <div className='container'>

        <div className={styles.homeReviewsContent}>
          <div className='slogan slogan--reverse'>
            <span>our reviews</span>
          </div>

          <h2>What Our Clients Say</h2>

          <p>
            Don't just take our word for it. Hear from homeowners who trusted us with their mortgage journey.
          </p>
        </div>

        <div className={styles.homeReviewsWrapper + ' wrapper'}>

          <div className={sliderStyles.reviewsSlider}>
            <div className={sliderStyles.reviewsSliderCard}>
              <div className={sliderStyles.reviewsSliderQuote}>"</div>

              <div className={sliderStyles.reviewsSliderStars}>
                {Array.from({ length: currentReview.rating }).map((_, i) => (
                  <svg
                    key={i}
                    width='20'
                    height='20'
                    viewBox='0 0 20 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z'
                      fill='#00D3F2'
                    />
                  </svg>
                ))}
              </div>

              <p className={sliderStyles.reviewsSliderText}>{currentReview.text}</p>

              <div className={sliderStyles.reviewsSliderAuthor}>
                <p className={sliderStyles.reviewsSliderName}>{currentReview.author}</p>
                <p className={sliderStyles.reviewsSliderRole}>{currentReview.role}</p>
              </div>

              <div className={sliderStyles.reviewsSliderSocial}>
                <div className={sliderStyles.reviewsSliderAvatars}>
                  {avatars.map((avatar, index) => (
                    <div key={index} className={sliderStyles.reviewsSliderAvatar}>
                      <img 
                        src={avatar} 
                        alt={`Customer ${index + 1}`}
                        width={40}
                        height={40}
                      />
                    </div>
                  ))}
                </div>
                <p className={sliderStyles.reviewsSliderSocialText}>
                  Join 8,500+ happy homeowners
                </p>
              </div>

              <div className={sliderStyles.reviewsSliderNavigation}>
                <div className={sliderStyles.reviewsSliderDots}>
                  {reviews.map((_, index) => (
                    <button
                      key={index}
                      className={`${sliderStyles.reviewsSliderDot} ${index === currentSlide ? sliderStyles.reviewsSliderDotActive : ''
                        }`}
                      onClick={() => goToSlide(index)}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>

                <div className={sliderStyles.reviewsSliderArrows}>
                  <button
                    className={sliderStyles.reviewsSliderArrow}
                    onClick={prevSlide}
                    aria-label='Previous slide'
                  >
                    <svg
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M15 18L9 12L15 6'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </button>
                  <button
                    className={sliderStyles.reviewsSliderArrow}
                    onClick={nextSlide}
                    aria-label='Next slide'
                  >
                    <svg
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M9 18L15 12L9 6'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>



          <ul className={styles.homeReviewsList}>
            <li
              className={
                styles.homeReviewsListItem + ' ' + styles.homeReviewsListItemFirst
              }
            >

              <img
                src={reviewsImage}
                alt='Reviews'
                width={144}
                height={144}
                loading='lazy'
              />

              <div>
                <span>8.5K+</span>
                <p>Happy Customers</p>
              </div>

            </li>

            <li
              className={
                styles.homeReviewsListItem +
                ' ' +
                styles.homeReviewsListItemSecond
              }
            >
              <img
                src={secondReviewsImage}
                alt='Reviews'
                width={144}
                height={144}
                loading='lazy'
              />

              <div>
                <span>$2.5B+</span>
                <p>Total Funded</p>
              </div>

            </li>

            <li
              className={
                styles.homeReviewsListItem + ' ' + styles.homeReviewsListItemThird
              }
            >
              <img
                src={thirdReviewsImage}
                alt='Reviews'
                width={144}
                height={144}
                loading='lazy'
              />

              <div>   <span>99%</span>
                <p>Very Low Rates</p></div>

            </li>

          </ul>
    

        </div>

          <Link className='button' to='/loans'>
            <span>Explore Loans</span>
          </Link>


      </div>
    </section>
  )
}