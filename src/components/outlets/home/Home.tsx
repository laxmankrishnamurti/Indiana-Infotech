import { Hero } from "./index.home";
import "./Home.css";

function Home() {
  return (
    <section className="home-section-wrap">
      <div className="home-container-wra">
        <div className="hero-container-wrap">
          <Hero/>
        </div>
      </div>
    </section>
  )
}

export default Home