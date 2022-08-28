import "./TechStackLogo.css"

export default function TechStackLogo(props) {
  const LogoLink = props.LogoLink
  const LogoName = props.LogoName

  return (
    <div>
      <img className="Tech-Stack-logo" src={LogoLink} alt={LogoName}></img>
    </div>
  )
}
