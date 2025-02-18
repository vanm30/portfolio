import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "@/DataMgr/store";
import config from "@/configs/config.json";

export default function Navigation() {
  const curSection = useSelector((state: RootState) => state.global.curSection);
  const sections = config.Sections;

  return (
    <nav className="z-10 flex flex-row items-center py-4 px-16">
      <div className="flex flex-1 text-white">
        <svg
          width="71"
          height="50"
          viewBox="0 0 71 82"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M29.5478 48.0315L40.3049 73.4828C41.7828 77.8759 47.9977 77.8757 49.4752 73.4823L68.6549 28.0679C69.334 26.4598 68.5809 24.6056 66.9729 23.9265C65.3648 23.2473 63.5106 24.0004 62.8315 25.6085L44.8895 68.0924L34.1763 42.745L29.5478 48.0315Z"
            fill="currentColor"
          />
          <path
            d="M34.1357 40.1074C47.9687 24.3079 70.843 0.914551 70.843 0.914551C70.843 0.914551 50.4973 26.8365 36.6643 42.636C22.8314 58.4355 0 81.8291 0 81.8291C0 81.8291 20.3028 55.907 34.1357 40.1074Z"
            fill="currentColor"
          />
          <path
            d="M50.5714 24.068V14.1978C50.5714 9.81998 44.8933 8.10001 42.4646 11.7433L27.1822 34.6681L11.8997 11.7433C9.471 8.10001 3.79286 9.81997 3.79286 14.1978V59.7097C3.79286 61.4553 5.20796 62.8704 6.95358 62.8704C8.69919 62.8704 10.1143 61.4553 10.1143 59.7097V20.4615L23.5003 40.5416C25.2518 43.169 29.1125 43.169 30.864 40.5416L44.25 20.4615V31.2882L50.5714 24.068Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <div className="flex gap-16">
        {sections.map((section, index: number) => (
          <button
            key={index}
            className={`font-bold text-lg ${curSection === index ? "text-yellow" : "text-white"
              }`}
          >
            {section}
          </button>
        ))}
      </div>
      <div className="flex flex-1 gap-4 justify-end">
        <FaGithub className="h-6 w-6" />
        <FaLinkedin className="h-6 w-6" />
      </div>
    </nav>
  );
}
