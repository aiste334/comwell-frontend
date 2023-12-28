import React from 'react';

const Checkbox = ({ label, checked, onChange }) => {
  return (
    <label style={{ display: 'block', margin: '20px 0', cursor: 'pointer', userSelect: 'none' }}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        style={{ marginRight: '8px', width: "20px", height: "20px", borderRadius: '4px' }}
      />
      {label}
    </label>
  );
};

export default Checkbox;
