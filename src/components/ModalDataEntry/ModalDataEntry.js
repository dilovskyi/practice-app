import React, { useState } from "react";
import { Modal, Button } from "antd";
import AreaDataEntry from "../AreaDataEntry";
import ResultBaner from "../ResultBaner";
import { Trans } from "react-i18next";

const ModalDataEntry = ({ description, handler, handlerParams }) => {
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
    setHandlerResult(handler(...argumentsArr));
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
          return (
            <AreaDataEntry
              param={param}
              key={index}
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
