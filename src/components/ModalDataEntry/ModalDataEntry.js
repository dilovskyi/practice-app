import { useState } from "react";
import { Trans } from "react-i18next";
import { Modal, Button } from "antd";
import AreaDataEntry from "../AreaDataEntry";
import ResultBaner from "../ResultBaner";

const ModalDataEntry = ({
  pageLanguage,
  description,
  handlerFunction,
  handlerParams,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [handlerResult, setHandlerResult] = useState();
  const [argumentsArr, setArgumentsArr] = useState([]);

  function inputValueValidation(oldValue) {
    // Create arr from string
    let v = oldValue.split(",");
    let numberV = v.map(Number);

    //Если это один элемент - возвращаем цисло, а не массив
    if (numberV.length === 1) {
      return numberV[0];
    }
    return numberV;
  }
  console.log(handlerParams);
  // Combining parameters from each modal into an array
  const combineParams = (value, pos) => {
    const output = inputValueValidation(value);
    setArgumentsArr((prevArr) => {
      const newArr = prevArr;
      newArr[pos] = output;
      return newArr;
    });
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // Run task handler
  const handleTaskResult = () => {
    setHandlerResult(handlerFunction(...argumentsArr));
    console.log(handlerFunction);
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
        okText={<Trans i18nKey="buttonsText.modal.start" />}
        onCancel={handleCancel}
        cancelText={<Trans i18nKey="buttonsText.modal.cencel" />}
      >
        {handlerParams.map((param, index) => {
          const { pos, label } = param;
          return (
            <AreaDataEntry
              key={index}
              paramPos={pos}
              paramLabel={label[pageLanguage]}
              onChangeHandler={combineParams}
            />
          );
        })}
        {/* FIX: Обработать TRUE or FALSE */}
        {handlerResult ? <ResultBaner result={handlerResult} /> : null}
      </Modal>
    </>
  );
};

export default ModalDataEntry;
