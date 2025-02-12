import { ReactNode } from "react";

interface IBaseSection {
  children: ReactNode;
}

export default function BaseSection({ children }: IBaseSection) {
  return (
    <div className="flex flex-col gap-8 h-screen justify-center items-center px-14 snap-start">
      {children}
    </div>
  );
}
