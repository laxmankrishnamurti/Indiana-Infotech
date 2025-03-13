// import expand from "../../../../assets/services/expand.svg";
// import collapse from "../../../../assets/services/collapse.png";
import "./Service.css"
// import { useState } from "react";

function Service({head, children, first, second} : {head: string, children: string[], first: string, second: string}) {
    // const [expandStatus, setExpandStatus] = useState(false);

    // const manageExpand = () => {
    //     setExpandStatus((prevStatus) => !prevStatus)
    // }

  return (
    <div className={`service-wrapper`} style={{background: `linear-gradient(90deg, ${first} , ${second})`}}>
        <div className="service-head">
            <h1 className="s-h">{head}</h1>
            {/* <button>
                {expandStatus ? (
                    <img src={collapse} alt="expand" onClick={manageExpand}/>
                ) : 
                    <img src={expand} alt="collapse" onClick={manageExpand}/>
                }
            </button> */}
        </div>
        <div className="service-children">
            {
                children.map((child, index) => (
                    <li key={index} className="li-child">{child}</li>
                ))
            }
        </div>
    </div>
  )
}

export default Service