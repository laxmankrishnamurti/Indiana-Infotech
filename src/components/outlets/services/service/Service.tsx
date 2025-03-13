import "./Service.css"

function Service({head, children, first, second} : {head: string, children: string[], first: string, second: string}) {

  return (
    <div className={`service-wrapper`} style={{background: `linear-gradient(90deg, ${first} , ${second})`}}>
        <div className="service-head">
            <h1 className="s-h">{head}</h1>
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