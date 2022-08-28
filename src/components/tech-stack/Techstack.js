import "./Techstack.css"
import TechStackLogo from "./tech-stack-logo/TechStackLogo"

// https://devicon.dev/
const javascriptLogoLink =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
const pythonLogoLink =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg"
const html5LogoLink =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg"
const css3LogoLink =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
const reactLogoLink =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
const nodeLogoLink = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
const denoLogoLink =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/denojs/denojs-original-wordmark.svg"
const expressLogoLink =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"
const jestLogoLink = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"
const postgresqlLogoLink =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain-wordmark.svg"
const materialuiLogoLink =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-plain.svg"
const bootstrapLogoLink =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
const pandasLogoLink =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original-wordmark.svg"
const numpyLogoLink =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original-wordmark.svg"
const matlabLogoLink =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg"
const arduinoLogoLink =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original-wordmark.svg"
const gitLogoLink = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain-wordmark.svg"
const githubLogoLink =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
const markdownLogoLink =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg"
const slackLogoLink =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original-wordmark.svg"
const vscodeLogoLink =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg"
const yarnLogoLink =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original-wordmark.svg"

const TechstackLogoLinks = [
  javascriptLogoLink,
  pythonLogoLink,
  html5LogoLink,
  css3LogoLink,
  reactLogoLink,
  nodeLogoLink,
  denoLogoLink,
  expressLogoLink,
  jestLogoLink,
  postgresqlLogoLink,
  materialuiLogoLink,
  bootstrapLogoLink,
  pandasLogoLink,
  numpyLogoLink,
  matlabLogoLink,
  arduinoLogoLink,
  gitLogoLink,
  githubLogoLink,
  markdownLogoLink,
  slackLogoLink,
  vscodeLogoLink,
  yarnLogoLink,
]

const TechstackLogoNames = [
  "Javascript",
  "Python",
  "HTML5",
  "CSS3",
  "React",
  "NodeJS",
  "Deno",
  "Express",
  "Jest",
  "PostgreSQL",
  "MaterialUI",
  "Bootstrap",
  "Pandas",
  "Numpy",
  "Matlab",
  "Arduino",
  "Git",
  "Github",
  "Markdown",
  "Slack",
  "VSCode",
  "Yarn",
]

function Techstack(props) {
  return <div className="App-Main-Content-Techstack-slider">{getTechstackLogos()}</div>
}

function getTechstackLogos() {
  return (
    <div className="App-Main-Content-Techstack-slider-track">
      {TechstackLogoLinks.map(Tech => {
        return (
          <TechStackLogo
            LogoLink={Tech}
            LogoName={TechstackLogoNames[TechstackLogoLinks.indexOf(Tech)]}
          />
        )
      })}
      {/* Repeated for animation */}
      {TechstackLogoLinks.map(Tech => {
        return (
          <TechStackLogo
            LogoLink={Tech}
            LogoName={TechstackLogoNames[TechstackLogoLinks.indexOf(Tech)]}
          />
        )
      })}
    </div>
  )
}

export default Techstack
