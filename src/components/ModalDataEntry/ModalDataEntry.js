import PropTypes from "prop-types"; // ES6
import { useState } from "react";
import { Alert, Modal, Button } from "antd";
import { validationHandler, convertValueInNums } from "../../helpers";
import ResultBanner from "../ResultBanner";
import ParamForm from "../ParamForm";

const ModalDataEntry = ({ t, description, handlerFunction, handlerParams }) => {
  const [isModalVisible, setIsModalVisible] = useState(null);
  const [handlerResult, setHandlerResult] = useState(null);
  const [argumentsArr, setArgumentsArr] = useState([]);
  // const [inputValue, setInputValue] = useState(null);
  const [isValueError, setIsValueError] = useState(null);

  // Combining parameters from each modal into an array
  const combineParams = (value, pos) => {
    setArgumentsArr((prevArr) => {
      const newArr = prevArr;
      newArr[pos] = value;
      return newArr;
    });
  };

  const inputOnChangeHandler = (value, pos) => {
    const { validatedValue, isError } = validationHandler(value);
    // setInputValue(validatedValue);
    setIsValueError(isError);

    let inputNumberValue = convertValueInNums(validatedValue);

    // If input value was number (arrLenght or LastNumber) - set as number not array
    if (inputNumberValue.length === 1) {
      inputNumberValue = inputNumberValue[0];
    }
    combineParams(inputNumberValue, pos);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setIsValueError(false);
    setHandlerResult(null);
  };

  // Run task handler
  const handleTaskResult = () => {
    setHandlerResult(handlerFunction(...argumentsArr));
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        {t("buttonsText.modal.open")}
      </Button>
      <Modal
        visible={isModalVisible}
        title={description}
        onOk={handleTaskResult}
        okButtonProps={{ disabled: isValueError }}
        okText={t("buttonsText.modal.start")}
        onCancel={handleCancel}
        cancelText={t("buttonsText.modal.cencel")}
        width={1000}
        destroyOnClose="true"
      >
        <ParamForm
          handlerParams={handlerParams}
          inputOnChangeHandler={inputOnChangeHandler}
        />
        {isValueError ? (
          <Alert
            message={t("modalDataEntry.warning")}
            type="warning"
            showIcon
            banner
            closable
          />
        ) : null}
        {handlerResult === null ? null : (
          <ResultBanner result={handlerResult} />
        )}
      </Modal>
    </>
  );
};

ModalDataEntry.defaultProps = {
  t: (key) => key,
  description: "No data",
  handlerFunction: () => "No data",
  handlerParams: [],
};

ModalDataEntry.propTypes = {
  description: PropTypes.string,
  handlerFunction: PropTypes.func,
  handlerParams: PropTypes.array,
};

export default ModalDataEntry;
