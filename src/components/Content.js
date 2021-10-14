import "./Content.css"
import Techstack from "./Techstack"
import bmkilipicture from "../images/BM-Kili.png"
import sigmaLabsXYZLogo from "../images/sigmaLabsXYZ-logo.png"
import uowLogo from "../images/uow-logo.png"
import cfbsLogo from "../images/cfbs-logo.png"

function Content(props) {
  setCookie(props.data.getUserName)
  return (
    <div>
      <img id="App-Main-Content-mainPicture" src={bmkilipicture} alt="BM Kilimanjaro" />
      <br />
      <br />
      <br />
      {displayTechstack()}
      <br />
      <br />
      <br />
      {displayJourney()}
      <br />
      <br />
      <br />
    </div>
  )
}

function setCookie(getUserName) {
  const oneDayInSeconds = 60 // 60 * 60 * 24
  document.cookie = `BMSiteUserName=${getUserName}; max-age=${oneDayInSeconds}`
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
      {displayUOW()}
      {displayCFBS()}
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
          <h3 className="App-Main-Content-myJourney-expHeader-expDetails-text">Sigma Labs XYZ</h3>
          <p className="App-Main-Content-myJourney-expHeader-expDetails-text">
            August 2021 - Present
          </p>
          <p className="App-Main-Content-myJourney-expHeader-expDetails-text">
            Company description
          </p>
        </div>
      </div>
      <p className="App-Main-Content-myJourney-expSummary">
        lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200
        lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200
      </p>
    </div>
  )
}

function displayUOW() {
  return (
    <div className="App-Main-Content-myJourney-exp">
      <div className="App-Main-Content-myJourney-expHeader">
        <img
          className="App-Main-Content-myJourney-expHeader-expLogo"
          src={uowLogo}
          alt="University of Warwick Logo"
        />
        <div className="App-Main-Content-myJourney-expHeader-expDetails">
          <h3 className="App-Main-Content-myJourney-expHeader-expDetails-text">
            University of Warwick
          </h3>
          <p className="App-Main-Content-myJourney-expHeader-expDetails-text">
            October 2017 - July 2021
          </p>
          <p className="App-Main-Content-myJourney-expHeader-expDetails-text">
            Company description
          </p>
        </div>
      </div>
      <p className="App-Main-Content-myJourney-expSummary">
        lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200
        lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200lorem200
      </p>
    </div>
  )
}

function displayCFBS() {
  return (
    <div className="App-Main-Content-myJourney-exp">
      <div className="App-Main-Content-myJourney-expHeader">
        <img
          className="App-Main-Content-myJourney-expHeader-expLogo"
          src={cfbsLogo}
          alt="Central Foundation Boys' School Logo"
        />
        <div className="App-Main-Content-myJourney-expHeader-expDetails">
          <h3 className="App-Main-Content-myJourney-expHeader-expDetails-text">
            Central Foundation Boys' School
          </h3>
          <p className="App-Main-Content-myJourney-expHeader-expDetails-text">
            September 2010 - July 2017
          </p>
          <p className="App-Main-Content-myJourney-expHeader-expDetails-text">
            Company description
          </p>
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
