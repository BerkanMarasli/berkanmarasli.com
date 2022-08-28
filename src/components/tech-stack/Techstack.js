import "./TechStack.css"
import TechStackLogo from "./tech-stack-logo/TechStackLogo"
import { TECH_STACK, TECH_STACK_LOGOS } from "../../constants"

export default function TechStack(props) {
  return (
    <div className="Tech-Stack-slider">
      <div className="Tech-Stack-slider-track">
        {TECH_STACK.map(tech => {
          return (
            <TechStackLogo logoLink={TECH_STACK_LOGOS[tech]} logoName={tech} key={`${tech}-1`} />
          )
        })}
        {/* Repeated for animation */}
        {TECH_STACK.map(tech => {
          return (
            <TechStackLogo logoLink={TECH_STACK_LOGOS[tech]} logoName={tech} key={`${tech}-2`} />
          )
        })}
      </div>
    </div>
  )
}
