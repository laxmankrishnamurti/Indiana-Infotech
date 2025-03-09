import first from "../../../../assets/hero/first.avif";
import second from "../../../../assets/hero/web_designing.svg";
import third from "../../../../assets/hero/app_development.avif";

import next from "../../../../assets/hero/next.png";
import prev from "../../../../assets/hero/arrow.png";

import { useEffect, useState } from "react";
import "./Hero.css";
import { Link } from "react-router-dom";

const slides = [
  { id: 1, 
    image: first,
    heading: "SOFTWARE DEVELOPMENT",
    subheading: "For Growing Business",
    para: "We build powerful, scalable, and secure software tailored to your business needs. From custom applications to enterprise solutions, our expert developers ensure high performance and seamless functionality using the latest technologies.",
    ctaText: "🚀 Build Your Software",
    ctaLink: "/about",
  },
  { id: 2, 
    image: second,
    heading: "Graphic Designing",
    subheading: "Grow your business with amazing design techniques.",
    para: "We create stunning, user-friendly, and responsive websites that engage visitors and drive conversions. Our designs blend creativity with functionality, ensuring smooth navigation and a seamless user experience.",
    ctaText: "🎨 Get a Stunning Website",
    ctaLink: "/serivice",
  },
  { id: 3, 
    image: third,
    heading: "Mobile Apps",
    subheading: "User friendly UI & UX",
    para: "We develop high-performance mobile and web apps for Android, iOS, and cross-platform needs. Our focus is on intuitive design, smooth performance, and secure architecture to enhance user engagement and business growth.",
    ctaText: "📱 Launch Your App",
    ctaLink: "/carrer ",
  },
]


function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    ))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    ))
  }

  useEffect(() => {
    const timer = setInterval(goToNext, 5000);
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="hero-container-slider">
      {
        slides.map((slide, index) => (
          <div key={slide.id} className={`slide ${index === currentIndex ? "active" : ""}`}>
            <div className="slide-image">
              <img src={slide.image} alt={`Slide ${slide.id}`} />
            </div>
            <div className="content">
              <h1 className="slide-heading">{slide.heading}</h1>
              <h2 className="slide-subheading">{slide.subheading}</h2>
              <p className="slide-para">{slide.para}</p>
              <Link to={slide.ctaLink} className="slide-link">{slide.ctaText}</Link>
            </div>
          </div>
        ))
      }

      {/* slider buttons  */}

      <button className="next" onClick={goToNext}>
        <img src={next} alt="next-btn" className="arrow" />
      </button>
      <button className="prev" onClick={goToPrevious}>
        <img src={prev} alt="prev-btn" className="arrow" />
      </button>

      {/* slider dots  */}

      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>

    </div>
  )
}

export default Hero