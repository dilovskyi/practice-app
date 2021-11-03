import { useState } from "react";
import { Trans } from "react-i18next";
import { Form, Alert, Input, Modal, Button } from "antd";
import ResultBaner from "../ResultBaner";

const ModalDataEntry = ({ description, handlerFunction, handlerParams }) => {
  const [isModalVisible, setIsModalVisible] = useState(null);
  const [handlerResult, setHandlerResult] = useState(null);
  const [argumentsArr, setArgumentsArr] = useState([]);
  const [inputValue, setInputValue] = useState(null);
  const [isValueError, setIsValueError] = useState(null);
  const [form] = Form.useForm();

  const validationHandler = (value) => {
    let isError = false;
    let outPutValue = value;
    const regExp = new RegExp(/[^\d|,\s]/g);

    if (regExp.test(value)) {
      isError = true;
      outPutValue = value.replace(regExp, "");
    }
    setIsValueError(isError);
    setInputValue(outPutValue);
    return outPutValue;
  };

  function convertValueInNums(value) {
    // Create arr of numbers from string
    const argumentsArr = value.split(",");
    const numberArgumentsArr = argumentsArr.map((item) => +item);
    return numberArgumentsArr;
  }

  // Combining parameters from each modal into an array
  const combineParams = (value, pos) => {
    setArgumentsArr((prevArr) => {
      const newArr = prevArr;
      newArr[pos] = value;
      return newArr;
    });
  };

  const inputOnChangeHandler = (value, pos) => {
    const validatedValue = validationHandler(value);
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
  };

  // Run task handler
  const handleTaskResult = () => {
    setHandlerResult(handlerFunction(...argumentsArr));
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        <Trans i18nKey="buttonsText.modal.open" />
      </Button>
      <Modal
        visible={isModalVisible}
        title={description}
        onOk={handleTaskResult}
        okButtonProps={{ disabled: isValueError }}
        okText={<Trans i18nKey="buttonsText.modal.start" />}
        onCancel={handleCancel}
        cancelText={<Trans i18nKey="buttonsText.modal.cencel" />}
        width={1000}
        destroyOnClose="true"
      >
        <Form form={form} layout="vertical">
          {handlerParams.map((param, index) => {
            const { pos, id } = param;
            return (
              <Form.Item
                key={index}
                label={<Trans i18nKey={`taskParamName.${id}`} />}
              >
                <Input
                  type="text"
                  onChange={(event) =>
                    inputOnChangeHandler(event.target.value, pos)
                  }
                />
              </Form.Item>
            );
          })}
        </Form>
        {isValueError ? (
          <Alert
            message={<Trans i18nKey="modalDataEntry.warning" />}
            type="warning"
            showIcon
            banner
            closable
          />
        ) : null}
        {handlerResult === null ? null : <ResultBaner result={handlerResult} />}
      </Modal>
    </>
  );
};

export default ModalDataEntry;
