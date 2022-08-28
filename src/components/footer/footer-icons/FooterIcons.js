import "./FooterIcons.css"
import { ICON } from "../../../icons"
import { EXTERNAL_LINKS } from "../../../constants"

export function FooterIcons() {
  return (
    <div className="Footer-icons">
      <a href={EXTERNAL_LINKS.linkedinProfile}>
        <img src={ICON.linkedin} alt="LinkedIn" className="Footer-icon"></img>
      </a>
      <a href={EXTERNAL_LINKS.githubProfile}>
        <img src={ICON.github} alt="Github" className="Footer-icon"></img>
      </a>
      <a href={`mailto:${EXTERNAL_LINKS.emailAddress}`}>
        <img src={ICON.email} alt="Email" className="Footer-icon"></img>
      </a>
    </div>
  )
}
