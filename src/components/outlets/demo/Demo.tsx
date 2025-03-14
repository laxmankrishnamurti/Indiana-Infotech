import Element from "./element/Element";
import Select from "./element/Select";
import {subjects, states} from "./Demo"
import "./Demo.css"

function Demo() {
  return (
    <div className="request-demo-container">
        <div className="demo-head">
            <h1 className="head">Request A Demo</h1>
        </div>
        <form action="#" className="request-form-container">
            <Element type="text" id="username" label="Name" name="username"/>

            <Element type="email" id="useremail" label="Email" name="useremail"/>

            <Element type="text" id="userphone" label="Phone Number" name="userphone"/>

            <Element type="text" id="institution" label="Institution Name" name="institution"/>

            <Select name="subject" id="subject" label="Select Subject" options={subjects} color="#FF914D" txtColor="#000"/>

            <Select name="state" id="state" label="Select State" options={states} color="#34506C" txtColor="#fff"/>

            <div className="text-area-container">
                <label htmlFor="comment">Query Description</label>
                <textarea name="comment" id="comment" cols={30} rows={10} placeholder="Comment here...">
                </textarea>
            </div>
        </form>
        <div className="submit-btn-container">
                <button type="submit">Send</button>
            </div>
    </div>
  )
}

export default Demo