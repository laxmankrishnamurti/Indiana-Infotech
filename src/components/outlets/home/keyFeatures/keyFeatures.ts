import studentManagement from "../../../../assets/home/keys/student_management.avif";
import attendanceTracking from "../../../../assets/home/keys/attendance_tracking.avif";
import feeManagement from "../../../../assets/home/keys/feeManagement.svg";
import analytics from "../../../../assets/home/keys/analytics.avif";
import eLearnings from "../../../../assets/home/keys/eLearnings.avif";
import hostel from "../../../../assets/home/keys/hostel.avif";
import hr from "../../../../assets/home/keys/humanResource.jpg";
import library from "../../../../assets/home/keys/libraryManagement.avif";
import parent from "../../../../assets/home/keys/parentalEngagement.avif";
import security from "../../../../assets/home/keys/security.avif";
import time from "../../../../assets/home/keys/timeTable.jpg";
import transport from "../../../../assets/home/keys/transport.avif";
import exam from "../../../../assets/home/keys/exam.svg";

const features = [
  {
    id: 1,
    position: "left",
    img: studentManagement,
    head: "Student Management",
    headColor: "#FF6501",
    para: "EducareStudy enables schools to maintain detailed student records, automate admissions, and generate essential documents like ID cards and certificates. This simplifies administrative tasks and ensures all student-related data is readily available.",
  },
  {
    id: 2,
    position: "right",
    img: attendanceTracking,
    head: "Attendance Tracking",
    headColor: "#7563DB",
    para: "The system provides real-time attendance tracking using biometrics, RFID, or mobile-based methods. Automated reports help schools monitor student presence effectively, reducing manual efforts.",
  },
  {
    id: 3,
    position: "left",
    img: feeManagement,
    head: "Fee Management",
    headColor: "#92E3A9",
    para: "Schools can streamline fee collection with online payments, automated receipts, and customizable fee structures. EducareStudy also sends reminders for pending payments, minimizing financial discrepancies.",
  },
  {
    id: 4,
    position: "right",
    img: time,
    head: "Timetable & Scheduling",
    headColor: "#2E4CA2",
    para: "Timetable & Scheduling With automated timetable generation, schools can easily schedule classes, allocate rooms, and resolve scheduling conflicts. EducareStudy notifies teachers and students about changes instantly.",
  },
  {
    id: 5,
    position: "left",
    img: exam,
    head: "Exam & Result Management",
    headColor: "#407BFF",
    para: "The platform supports online and offline examinations, automates result processing, and generates customizable report cards. This reduces manual grading errors and enhances efficiency.",
  },
  {
    id: 6,
    position: "right",
    img: library,
    head: "Library Management",
    headColor: "#F8BA3F",
    para: "Schools can efficiently track book issuance, returns, and overdue fines. Barcode and RFID integration ensures smooth library operations, while digital resources support e-learning.",
  },
  {
    id: 7,
    position: "left",
    img: hr,
    head: "HR & Payroll",
    headColor: "#DF8EDA",
    para: "EducareStudy manages staff records, automates payroll processing, and tracks leaves, making HR operations seamless and efficient for school administrators.",
  },
  {
    id: 8,
    position: "right",
    img: transport,
    head: "Transport Management",
    headColor: "#F0B444",
    para: "Schools can optimize routes, track school buses in real-time using GPS, and monitor driver details, ensuring the safety of students during commutes.",
  },
  {
    id: 9,
    position: "left",
    img: hostel,
    head: "Hostel & Accommodation Management",
    headColor: "#A5236D",
    para: "This feature assists in hostel room allocation, attendance tracking, and meal planning while maintaining hostel fees and expenses, providing a complete accommodation solution.",
  },
  {
    id: 10,
    position: "right",
    img: parent,
    head: "Parental Engagement",
    headColor: "#54BDC1",
    para: "A dedicated portal keeps parents informed about student progress, attendance, and school events through notifications, SMS, and emails, fostering better communication.",
  },
  {
    id: 11,
    position: "left",
    img: eLearnings,
    head: "E-Learning & Online Classes",
    headColor: "#D268CC",
    para: "EducareStudy integrates virtual classrooms, an LMS for digital content, and tools for assignment submission and grading, making remote learning convenient and interactive.",
  },
  {
    id: 12,
    position: "right",
    img: analytics,
    head: "Analytics",
    headColor: "#006F32",
    para: "The software provides in-depth reports on academic performance, attendance, and finances. Advanced analytics help schools make data-driven decisions to improve operations.",
  },
  {
    id: 13,
    position: "left",
    img: security,
    head: "Security & Data Privacy",
    headColor: "#7EA10F",
    para: "EducareStudy ensures secure access with role-based authentication, encrypted data storage, and regular backups, preventing unauthorized access and data loss.",
  },
];

export default features;
