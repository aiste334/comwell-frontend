import React from 'react';

function Label({ text, backgroundColor, fontColor }) {
  const labelStyle = {
    backgroundColor: backgroundColor,
    color: fontColor,
  };

  return (
    <span
      className="absolute left-[36px] px-[12px] py-[6px] rounded-full text-[11px] font-bold uppercase"
      style={labelStyle}
    >
      {text}
    </span>
  );
}

export default Label;
