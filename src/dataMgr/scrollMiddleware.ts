import { Middleware } from '@reduxjs/toolkit';
import { setCurSection, increaseSection, decreaseSection } from './globalSlice';

const scrollMiddleware: Middleware = (store) => (next) => (action) => {
  const result = next(action);
  const curSection = store.getState().global.curSection;

  if (setCurSection.match(action) || increaseSection.match(action) || decreaseSection.match(action)) {
    scrollToSection(curSection);
  }

  return result;
};

const scrollToSection = (sectionIndex: number) => {
  const section = document.getElementById(`section-${sectionIndex}`);
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export default scrollMiddleware;

