import React from "react";
import { Input } from "antd";

function FieldDataEntry({ param, onChangeHandler }) {
  const { pos, label } = param;

  return (
    <>
      <div>
        {label}
        <br />
        <Input type="text" onChange={(event) => onChangeHandler(event, pos)} />
      </div>
    </>
  );
}

export default FieldDataEntry;
