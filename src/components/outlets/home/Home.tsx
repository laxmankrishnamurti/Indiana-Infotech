import { Hero, Keys } from "./index.home";
import "./Home.css";

import why from "../../../assets/home/why_chart.png";

import features from "./keyFeatures/keyFeatures";

function Home() {
  return (
    <section className="home-section-wrap">
      <div className="home-container-wra">
        <div className="hero-container-wrap">
          <Hero/>
        </div>
        <div className="home-content-wrap">

          {/* comapny intro  */}
          <div className="company-intro">
            <div className="c-intro-head">
              <h2 className="c-intro">Why we are the best for your Business Solution !</h2>
            </div>
            <div className="c-intro-para">
              Indiana Infotech Pvt. Ltd. is a Software Website ecommerce and Mobile Application Development service provider company in India. Not just a software company but we have gained the faith of customers and positioned
              as one of the best software development company in India since 2014. We aim to provide fully
              interactive and cost-effective solutions by establishing a bridge between the latest EduCare
              Technologies. We have an excellent team of experts who are highly skilled in software architects,
              software engineers, and determined solid growth in the web solution market. Our mission is 100%
              client satisfaction by delivering creative and reliable solutions according to our client's needs.
              We focused on versatile project management intending to provide Software, Web, 3Ds & other solutions
              with global acceptability.
            </div>
          </div>

          {/* ready software  */}

          <div className="ready-software">
            <div className="r-s-h">
              <h2>Our Ready Software</h2>
            </div>
            <div className="ready-software-container">
              <b className="rea-soft-bold">EducareStudy: Introducing The Ultimate School Management ERP Software</b>
              <p className="educare-intro-first">
                Introduction
                EducareStudy is a state-of-the-art ERP software designed to streamline and automate school management processes. It is a comprehensive solution that caters to all administrative, academic, and financial aspects of running an educational institution. Whether it is managing student data, tracking attendance, handling fees, or facilitating communication between teachers, students, and parents, EducareStudy provides a seamless, user-friendly, and efficient experience.
              </p>
            </div>
          </div>

          {/* why section  */}

          <div className="why-to-choose">
            <div className="wh-to-head">
              <h2>Why Choose EducareStudy?</h2>
            </div>
            <div className="why-chart-para">
              <div className="why-chart-container">
                <img src={why} alt="why-chart" />
              </div>
              <p className="wh-to-para">
                EducareStudy is built to simplify school management and enhance productivity. With a cloud-based infrastructure, institutions can access data from anywhere, ensuring uninterrupted learning and administration. Schools, colleges, and universities can manage their operations effortlessly with our intuitive dashboards, advanced analytics, and automated workflows.

                <br />
                <br />

                EducareStudy is built to simplify school management and enhance productivity. With a cloud-based infrastructure, institutions can access data from anywhere, ensuring uninterrupted learning and administration. Schools, colleges, and universities can manage their operations effortlessly with our intuitive dashboards, advanced analytics, and automated workflows.
              </p>

            </div>
          </div>

          {/* key features   */}

          {
            features.map((feature) => (
              <div className="feature key-features-container" key={feature.id}>
                <Keys position={feature.position} img={feature.img} head={feature.head} headColor={feature.headColor} para={feature.para}/>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Home