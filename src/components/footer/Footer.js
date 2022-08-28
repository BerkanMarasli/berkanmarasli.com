import "./Footer.css"
import { FooterIcons } from "./footer-icons/FooterIcons"
import { EXTERNAL_LINKS } from "../../constants"

export default function Footer(props) {
  // TODO 'functions' does not make sense here
  const { displayMainPage } = props.functions
  return <footer className="Footer">{displayMainPage ? displayFooter() : null}</footer>
}

function displayFooter() {
  return (
    <div className="Footer-container">
      <p className="Footer-marginSpacing">
        This website is{" "}
        <a className="Footer-textLinks" href={EXTERNAL_LINKS.codeRepository}>
          open source
        </a>
        . Found a mistake?{" "}
        <a className="Footer-textLinks" href={`${EXTERNAL_LINKS.codeRepository}/issues`}>
          Raise an issue
        </a>
        !
      </p>
      <p className="Footer-marginSpacing">© {new Date().getFullYear()}, Berkan Marasli</p>
      {FooterIcons()}
    </div>
  )
}
