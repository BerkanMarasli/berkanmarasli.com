import "./TechStackLogo.css"

export default function TechStackLogo(props) {
  const logoLink = props.logoLink
  const logoName = props.logoName

  return (
    <div>
      <img className="Tech-Stack-logo" src={logoLink} alt={logoName}></img>
    </div>
  )
}
