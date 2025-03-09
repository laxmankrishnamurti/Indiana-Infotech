import { Hero, Keys } from "./index.home";
import "./Home.css";

import why from "../../../assets/home/why_chart.png";
import student_management from "../../../assets/home/keys/student_management.avif";
import attendance_tracking from "../../../assets/home/keys/attendance_tracking.avif";

const keys = [
  {
    id: 1,
    position: "left",
    img: "",
    head: "Student Management",
    para: "EducareStudy enables schools to maintain detailed student records, automate admissions, and generate essential documents like ID cards and certificates. This simplifies administrative tasks and ensures all student-related data is readily available."
  },
  {
    id: 2,
    position: "right",
    img: "",
    head: "Attendance Tracking",
    para: "The system provides real-time attendance tracking using biometrics, RFID, or mobile-based methods. Automated reports help schools monitor student presence effectively, reducing manual efforts."
  },
  {
    id: 3,
    position: "left",
    img: "",
    head: "Fee Management",
    para: "Schools can streamline fee collection with online payments, automated receipts, and customizable fee structures. EducareStudy also sends reminders for pending payments, minimizing financial discrepancies."
  },
  {
    id: 4,
    position: "right",
    img: "",
    head: "Timetable & Scheduling",
    para: "Timetable & Scheduling With automated timetable generation, schools can easily schedule classes, allocate rooms, and resolve scheduling conflicts. EducareStudy notifies teachers and students about changes instantly."
  },
  {
    id: 5,
    position: "left",
    img: "",
    head: "Exam & Result Management",
    para: "The platform supports online and offline examinations, automates result processing, and generates customizable report cards. This reduces manual grading errors and enhances efficiency."
  },
  {
    id: 6,
    position: "left",
    img: "",
    head: "Library Management",
    para: "Schools can efficiently track book issuance, returns, and overdue fines. Barcode and RFID integration ensures smooth library operations, while digital resources support e-learning."
  },
  {
    id: 7,
    position: "right",
    img: "",
    head: "HR & Payroll",
    para: "EducareStudy manages staff records, automates payroll processing, and tracks leaves, making HR operations seamless and efficient for school administrators."
  },
  {
    id: 8,
    position: "left",
    img: "",
    head: "Transport Management",
    para: "Schools can optimize routes, track school buses in real-time using GPS, and monitor driver details, ensuring the safety of students during commutes."
  },
  {
    id: 9,
    position: "right",
    img: "",
    head: "Hostel & Accommodation Management",
    para: "This feature assists in hostel room allocation, attendance tracking, and meal planning while maintaining hostel fees and expenses, providing a complete accommodation solution."
  },
  {
    id: 10,
    position: "left",
    img: "",
    head: "Parental Engagement",
    para: "A dedicated portal keeps parents informed about student progress, attendance, and school events through notifications, SMS, and emails, fostering better communication."
  },
  {
    id: 11,
    position: "right",
    img: "",
    head: "E-Learning & Online Classes",
    para: "EducareStudy integrates virtual classrooms, an LMS for digital content, and tools for assignment submission and grading, making remote learning convenient and interactive."
  },
  {
    id: 12,
    position: "left",
    img: "",
    head: "Analytics",
    para: "The software provides in-depth reports on academic performance, attendance, and finances. Advanced analytics help schools make data-driven decisions to improve operations."
  },
  {
    id: 13,
    position: "right",
    img: "",
    head: "Security & Data Privacy",
    para: "EducareStudy ensures secure access with role-based authentication, encrypted data storage, and regular backups, preventing unauthorized access and data loss."
  },
]

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
              <h2 className="c-intro">Why we are the for your Business Solution !</h2>
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

          <Keys position={"left"} img={student_management} para={keys[0].para}/>
          <Keys position={"right"} img={attendance_tracking} para={keys[1].para}/>
        </div>
      </div>
    </section>
  )
}

export default Home