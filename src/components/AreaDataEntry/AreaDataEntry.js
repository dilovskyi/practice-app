import React from "react";
import { Input } from "antd";

function FieldDataEntry({ paramPos, paramLabel, onChangeHandler }) {
  return (
    <>
      <div>
        {paramLabel}
        <br />
        <Input
          type="text"
          onChange={(event) => onChangeHandler(event, paramPos)}
        />
      </div>
    </>
  );
}

export default FieldDataEntry;
