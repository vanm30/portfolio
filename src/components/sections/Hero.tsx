import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  const TYPE_ANIMATION_SPEED_MS = 2500;
  return (
    <>
      <h2 className="font-caveat font-bold text-6xl h-16">
        <TypeAnimation
          sequence={["Yo!", TYPE_ANIMATION_SPEED_MS, "Hey!", TYPE_ANIMATION_SPEED_MS, "Hiii", TYPE_ANIMATION_SPEED_MS]}
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
    </>
  );
}
