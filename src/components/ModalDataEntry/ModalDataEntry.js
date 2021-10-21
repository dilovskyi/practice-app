import React, { useState } from "react";
import { Modal, InputNumber, Button, Space, Row, Col } from "antd";
import AreaDataEntry from "../AreaDataEntry";
import ResultBaner from "../ResultBaner";

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
        Задать параметры
      </Button>
      <Modal
        title={description}
        visible={isModalVisible}
        okText={"Выполнить"}
        onOk={handleOk}
        cancelText={"Закрыть"}
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
