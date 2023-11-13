import React from 'react';

function ContentTitle({ text, color }) {
  const titleStyle = {
    color: color,
  };

  return (
    <h2 className="text-lg font-bold" style={titleStyle}>
      {text}
    </h2>
  );
}

export default ContentTitle;