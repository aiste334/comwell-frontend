import React, { useState } from 'react';

const Checkbox = ({ label, onCheck }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = (e) => {
    setIsChecked(e.target.checked);
    if (onCheck) {
      onCheck(e.target.checked);
    }
  };

  return (
    <label style={{ display: 'block', margin: '20px 0', cursor: 'pointer', userSelect: 'none' }}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleOnChange}
        style={{ marginRight: '8px',width:"20px",height:"20px",borderRadius: '4px'}}
      />
      {label}
    </label>
  );
};

export default Checkbox;
