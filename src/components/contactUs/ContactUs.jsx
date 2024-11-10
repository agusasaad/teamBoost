import styles from './ContactUs.module.css'

const ContactUs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titles}>
        <span className={styles.subtitle}>START YOUR PROCESS</span>
        <h2>Share your ideas with us, and we&apos;ll make them a reality.</h2>
        <div className={styles.steps_container}>
          <h3>Get a quote in 3 simple steps.</h3>
          <div className={styles.steps}>
            <div className={styles.step_one}>
              <span>01.</span>
              <p>
                We&apos;ll meet with you to get to know you, learn about your
                project, and present the options and process we offer.
              </p>
            </div>
            <div className={styles.step_one}>
              <span>02.</span>
              <p>
                We&apos;ll take care of listing all the tasks that make up the
                first deliverable of your project.
              </p>
            </div>
            <div className={styles.step_one}>
              <span>03.</span>
              <p>
                We&apos;ll present the proposal with all the functionalities of
                your project, along with cost and time estimates, so we can
                start working together.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.calendly_container}></div>
    </div>
  )
}

export default ContactUs
