import { useState } from "react";
import { Modal, Button } from "antd";
import { Trans } from "react-i18next";
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

  const onChangeHandler = (event, pos) => {
    setArgumentsArr((prevArr) => {
      const newArr = prevArr;
      newArr[pos] = +event.target.value;
      return newArr;
    });
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleOk = () => {
    setHandlerResult(handlerFunction(...argumentsArr));
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        <Trans i18nKey="buttonsText.modal.open" />
      </Button>
      <Modal
        title={description}
        visible={isModalVisible}
        okText={<Trans i18nKey="buttonsText.modal.start" />}
        onOk={handleOk}
        cancelText={<Trans i18nKey="buttonsText.modal.cencel" />}
        onCancel={handleCancel}
        destroyOnClose={true}
      >
        {handlerParams.map((param, index) => {
          const { pos, label } = param;
          return (
            <AreaDataEntry
              key={index}
              paramPos={pos}
              paramLabel={label[pageLanguage]}
              onChangeHandler={onChangeHandler}
            />
          );
        })}
        {handlerResult ? <ResultBaner result={handlerResult} /> : null}
      </Modal>
    </>
  );
};

export default ModalDataEntry;
