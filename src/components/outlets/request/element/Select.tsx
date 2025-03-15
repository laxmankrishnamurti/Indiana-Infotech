import "./Select.css"

function Select({name, id, label, options, color, txtColor} : {name: string, id: string, label:string, options: string[], color: string, txtColor: string}) {
  return (
    <div className="selection-container">
        <label htmlFor={id}>{label}</label>
        <select name={name} id={id} style={{backgroundColor: `${color}`, borderColor: `${color}`, color: `${txtColor}`}} required >
            {
                options.map((option, index) => (
                    <option key={index}>{option}</option>
                ))
            }
        </select>
    </div>
  )
}

export default Select