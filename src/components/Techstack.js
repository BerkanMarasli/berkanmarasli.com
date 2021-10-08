import "./Techstack.css";
import TechstackLogo from "./TechstackLogo";

// https://devicon.dev/
const javascriptLogoLink =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg";
const pythonLogoLink =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg";
const html5LogoLink =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg";
const css3LogoLink =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg";
const reactLogoLink =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg";
const denoLogoLink =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/denojs/denojs-original-wordmark.svg";
const jestLogoLink =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg";
const pandasLogoLink =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original-wordmark.svg";
const numpyLogoLink =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original-wordmark.svg";
const matlabLogoLink =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg";
const gitLogoLink =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain-wordmark.svg";
const githubLogoLink =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg";

const TechstackLogoLinks = [
  javascriptLogoLink,
  pythonLogoLink,
  html5LogoLink,
  css3LogoLink,
  reactLogoLink,
  denoLogoLink,
  jestLogoLink,
  pandasLogoLink,
  numpyLogoLink,
  matlabLogoLink,
  gitLogoLink,
  githubLogoLink,
];

const TechstackLogoNames = [
  "Javascript",
  "Python",
  "HTML5",
  "CSS3",
  "React",
  "Deno",
  "Jest",
  "Pandas",
  "Numpy",
  "Matlab",
  "Git",
  "Github",
];

function Techstack(props) {
  return <div className="slider">{getTechstackLogos()}</div>;
}

function getTechstackLogos() {
  return (
    <div className="slider-track">
      {TechstackLogoLinks.map((Tech) => {
        return (
          <TechstackLogo
            LogoLink={Tech}
            LogoName={TechstackLogoNames[TechstackLogoLinks.indexOf(Tech)]}
          />
        );
      })}
      {/* Repeated for animation */}
      {TechstackLogoLinks.map((Tech) => {
        return (
          <TechstackLogo
            LogoLink={Tech}
            LogoName={TechstackLogoNames[TechstackLogoLinks.indexOf(Tech)]}
          />
        );
      })}
    </div>
  );
}

export default Techstack;
