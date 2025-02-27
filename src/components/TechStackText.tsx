import React from 'react';

interface ITechStackText {
  text: string;
  style: React.CSSProperties;
}

export default function TechStackText({ text, style }: ITechStackText) {
  return (
    <div
      className="text-black text-sm bg-white font-bold py-1 px-2 text-center"
      style={{
        mixBlendMode: 'screen',
        ...style,
      }}
    >
      {text}
    </div>
  );
}

