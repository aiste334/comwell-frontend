import React from 'react';

function ContentText({ text, color }) {
  const textStyle = {
    color: color,
  };

  return (
    <p className="text-sm" style={textStyle}>
      {text}
    </p>
  );
}

export default ContentText;