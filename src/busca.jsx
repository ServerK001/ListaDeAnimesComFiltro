import React from "react";

const SeachInput = ({ value, onChange }) => {
  function HandChange(event) {
    onChange(event.target.value);
  }
  return (
    <>
      <input type="search" value={value} onChange={HandChange} />
    </>
  );
};

export default SeachInput;
