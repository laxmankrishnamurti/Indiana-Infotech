import Carrer from "./carrer/Carrer"
import opportunities from "./Carrer"
import "./Carrers.css";

function Carrers() {
  return (
    <div className="carrer-wrapper">
      {
        opportunities.map((opp) => (
          <Carrer key={opp.id} postName={opp["Post Name"]} postDescription={opp["Post Description"]} jobContext={opp["Job Context"]} vacancy={opp.Vacancy} nature={opp["Job Nature"]} requirements={opp["Education Requirements"]} exp={opp.Experience} range={opp["Salary Range"]} first={opp.first} second={opp.second} color={opp.color} ref={opp.ref} />
        ))
      }
    </div>
  )
}

export default Carrers