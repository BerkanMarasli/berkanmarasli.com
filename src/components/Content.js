import "./Content.css"
import Techstack from "./Techstack"
import sigmaLabsXYZLogo from "../images/sigmaLabsXYZ-logo.png"

function Content(props) {
  return (
    <div>
      {displayTechstack()}
      {displayJourney()}
    </div>
  )
}

function displayTechstack() {
  return (
    <section>
      <h2>My Tech Stack</h2>
      <Techstack />
    </section>
  )
}

function displayJourney() {
  return (
    <section>
      <h2>My Journey</h2>
      {displaySigmaLabs()}
    </section>
  )
}

function displaySigmaLabs() {
  return (
    <div className="App-Main-Content-myJourney-exp">
      <div className="App-Main-Content-myJourney-expHeader">
        <img
          className="App-Main-Content-myJourney-expHeader-expLogo"
          src={sigmaLabsXYZLogo}
          alt="Sigma Labs XYZ Logo"
        />
        <div className="App-Main-Content-myJourney-expHeader-expDetails">
          <h3 className="text">Sigma Labs XYZ</h3>
          <p className="text">August 2021 - Present</p>
          <p className="text">Company description</p>
        </div>
      </div>
      <p className="App-Main-Content-myJourney-expSummary">
        lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200
        lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200
      </p>
    </div>
  )
}

export default Content
