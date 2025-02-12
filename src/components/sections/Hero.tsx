import { TypeAnimation } from "react-type-animation";
import BaseSection from "./BaseSection";

export default function Hero() {
  return (
    <BaseSection>
      <h2 className="font-caveat font-bold text-6xl">
        <TypeAnimation
          sequence={["Yo!", 4000, "Hey!", 4000, "Hiii", 4000]}
          wrapper="span"
          speed={10}
          repeat={Infinity}
        />
      </h2>
      <h1 className="font-bold text-6xl">I&apos;m Matej :)</h1>
      <p className="max-w-xl">
        Welcome to my portfolio! I’m mostly a web developer, but I currently
        work as a system/software engineer and UI designer on a rail
        communication system. I started as a tester, writing component tests,
        but now I also work on a distribution service, CI/CD, integrating and
        also do UI/UX here. <br />I have about 2-3 years of experience in this
        field.
      </p>
    </BaseSection>
  );
}
