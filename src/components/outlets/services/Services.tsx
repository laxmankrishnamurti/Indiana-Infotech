import Service from "./service/Service";
import services from "./services"
import "./Services.css";

function Services() {
  return (
    <div className="services-container">
        {
            services.map((service) => (
                <Service key={service.id} head={service.head} children={service.children} first={service.first} second={service.second}/>
            ))
        }
    </div>
  )
}

export default Services