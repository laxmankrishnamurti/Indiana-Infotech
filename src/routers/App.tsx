import { Header, Footer } from "../components/index.components";
import ErrorBoundary from "./ErrorBoundry";
import { Outlet } from "react-router-dom";
import "./App.css"

function App() {

  return (
    <>
      <div id="app">
        <Header/>
        <ErrorBoundary>
            <div id="outlet-component">
              <Outlet/>
            </div>
        </ErrorBoundary>
        <Footer/>
      </div>
    </>
  )
}

export default App
