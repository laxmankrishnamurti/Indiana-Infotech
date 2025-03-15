import "./Input.css"

function Input({type, id ,label, name}: {type: string, id: string, label: string, name: string}) {
    return (
      <div className="element-container">
          <label htmlFor={id}>{label}</label>
          <input type={type} id={id} name={name} required/>
      </div>
    )
}
  
export default Input