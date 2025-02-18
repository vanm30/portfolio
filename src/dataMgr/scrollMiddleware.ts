import { Middleware } from '@reduxjs/toolkit';
import { setCurSection } from './globalSlice';

const scrollMiddleware: Middleware = () => (next) => (action) => {
  const result = next(action);
  if (setCurSection.match(action)) {
    const sectionIndex = action.payload;

    const section = document.getElementById(`section-${sectionIndex}`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return result;
};

export default scrollMiddleware;

