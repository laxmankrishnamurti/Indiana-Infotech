import mission from "../../../assets/about/mission.svg";
import vision from "../../../assets/about/vision.svg";

import "./About.css";

function About() {
  return (
    <div className="about-sec-wrap">

        {/* first  */}

        <div className="ab-first about">
            <h1 className="head ab-first-head">Who are we?</h1>
            <div className="para ab-first-para">
                <p>
                    <em>Indiana Infotech Pvt. Ltd.</em> is a Software Website and Mobile Aplication Development service
                    provider company in India. Not just a software company but we have gained the faith
                    of customers and positioned as one of the best software development company in India
                    since 2014. We aim to provide fully interactive and cost-effective solutions by
                    establishing a bridge between the latest EduCare Technologies. We have an excellent
                    team of experts who are highly skilled in software architects, software engineers,
                    and determined solid growth in the web solution market. Our main focus is 100%
                    client satisfaction by delivering creative and reliable solutions according to our
                    client's needs. We focused on versatile project management intending to provide
                    Software, Web, 3Ds & other solutions with global acceptability.  Apart from this, Our main objective is to create customized software solutions to
                    excel business performance. Having worked on various projects from diverse industry
                    verticals, our master engineers can effectively recognize your business challenges &
                    opportunities and convey premium solutions inside your allotted time and budget.
                    Since 2014 we have developed so many EduCare solutions like <strong>EduCare
                    ERP</strong>, <strong>EduCare Account</strong>, <strong>EduCare HRM</strong>,
                    <strong>EduCare Academic System</strong>, <strong>EduCare POS</strong> system and so
                    on.
                    By these solutions, we have satisfied more than 100 customers and help them to drive
                    growth.
                </p>
            </div>
        </div>

        {/* second  */}

        <div className="ab-second about">
            <div className="head-container">
                <h1 className="head ab-second-head">Mission</h1>
                <img src={mission} alt="mission-logo" className="ab-log"/>
            </div>
            <div className="para ab-second-para">
                <p>
                    To make instrumental Changes in the Business & Organization Technological
                    Environment of the country, we aim at incorporating indigenous technologies,
                    removing the dependency on the readymade Software & Products from abroad. We make
                    our Management software in India as Customize for Indiai Business Organization
                    Needs. Our mission is 100% client satisfaction and we focused on versatile project
                    management with the aim to provide Software, Website other solutions with global
                    acceptability. 
                </p>
            </div>
        </div>

        {/* third  */}

        <div className="ab-third about">
            <div className="head-container">
                <h1 className="head ab-third-head">Vision</h1>
                <img src={vision} alt="mission-logo" className="ab-log"/>
            </div>
            <div className="para ab-third-para">
                <p>
                    Our vision is to become the number 1 software development company in India by
                    providing End to End software solution with a strong global footprint. We wish to
                    make a positive mark on people’s lives with our software technology. We dream that
                    India will be a real Digital India.
                </p>
            </div>
        </div>
    </div>
  )
}

export default About