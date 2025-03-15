import { subjects ,states } from "./requestPayloads";
import Input from "./element/Input";
import Select from "./element/Select";
import "./Request.css"

function Request() {
  return (
    <div className="demo-request-wrap">
        <div className="demo-head head">
            <h1>Request A Demo</h1>
        </div>
        <form action="#" className="demo-form-wrap">
            <div className="demo-form-container">
              <Input id="username" label="Name" name="username" type="text"/>
              <Input id="useremail" label="Email" name="useremail" type="email"/>
              <Input id="phone" label="Phone Number" name="phone" type="text"/>
              <Input id="institution" label="Institution/Company Name" name="institution" type="text"/>

              <Select id="queryType" label="Query Type" name="queryType" options={subjects} txtColor="#000" color="#FF914D"/>
              <Select id="state" label="State" name="state" options={states} txtColor="#fff" color="#34506C"/>

              <div className="text-area-container">
                  <label htmlFor="queryDescription">Query Description</label>
                  <textarea name="queryDescripton" id="queryDescription" placeholder="Comment here..."></textarea>
              </div>
            </div>
            <div className="submit-btn-container">
              <button type="submit" id="submit-btn">Send</button>
            </div>
        </form> 
    </div>
  )
}

export default Request