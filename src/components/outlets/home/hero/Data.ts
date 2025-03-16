import first from "../../../../assets/hero/first.avif";
import second from "../../../../assets/hero/web_designing.svg";
import third from "../../../../assets/hero/app_development.avif";
import four from "../../../../assets/hero/ecommerce.avif"


const slides = [
    { id: 1, 
      image: first,
      heading: "SOFTWARE DEVELOPMENT",
      subheading: "For Growing Business",
      para: "We build powerful, scalable, and secure software tailored to your business needs. From custom applications to enterprise solutions, our expert developers ensure high performance and seamless functionality using the latest technologies.",
      ctaText: "🚀 Build Your Software",
      ctaLink: "/request-a-demo",
    },
    { id: 2, 
      image: second,
      heading: "Graphic Designing",
      subheading: "Grow your business with amazing design techniques.",
      para: "We create stunning, user-friendly, and responsive websites that engage visitors and drive conversions. Our designs blend creativity with functionality, ensuring smooth navigation and a seamless user experience.",
      ctaText: "🎨 Get a Stunning Website",
      ctaLink: "/request-a-demo",
    },
    { id: 3, 
      image: third,
      heading: "Mobile Apps",
      subheading: "User friendly UI & UX",
      para: "We develop high-performance mobile and web apps for Android, iOS, and cross-platform needs. Our focus is on intuitive design, smooth performance, and secure architecture to enhance user engagement and business growth.",
      ctaText: "📱 Launch Your App",
      ctaLink: "/request-a-demo",
    },
    { 
      id: 4, 
      image: four,
      heading: "E-Commerce Solutions",
      subheading: "Scalable & Secure Online Stores",
      para: "We build high-performance e-commerce websites tailored for businesses. Our solutions ensure seamless shopping experiences, secure payments, and powerful analytics to drive sales and customer engagement.",
      ctaText: "🛒 Start Selling Online",
      ctaLink: "/request-a-demo",
    },  
  ]
  
export default slides;
