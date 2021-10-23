import { Input } from "antd";

// FieldDataEntry - Render the required number of parameter fields for the function
// paramPos - Parameter index
// paramLabel - Name of parameter
// onChangeHandler - Concatenates Parameters into an Array by ParamPos(index)
function FieldDataEntry({ paramPos, paramLabel, onChangeHandler }) {
  return (
    <>
      <div>
        {paramLabel}
        <br />
        <Input
          type="text"
          onChange={(event) => onChangeHandler(event.target.value, paramPos)}
        />
      </div>
    </>
  );
}

export default FieldDataEntry;
