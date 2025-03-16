import next from "../../../../assets/hero/next.png";
import prev from "../../../../assets/hero/arrow.png";
import slides from "./Data";

import { useEffect, useState } from "react";
import "./Hero.css";
import { Link } from "react-router-dom";


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
              <Link to={`${slide.ctaLink}`} className="slide-link">{slide.ctaText}</Link>
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