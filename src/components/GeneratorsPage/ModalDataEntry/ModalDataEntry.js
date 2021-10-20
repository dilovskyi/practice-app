import React, { useState } from "react";
import { Modal, InputNumber, Button, Space } from "antd";
import ResultBaner from "../ResultBaner";

const ModalDataEntry = ({ handler, handlerParams, description }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [handlerResult, setHandlerResult] = useState();
  const [arrLength, setArrLength] = useState();
  const [startNum, setStartNum] = useState();
  const [difference, setDifference] = useState();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setHandlerResult(handler(arrLength, startNum, difference).join(", "));
    setArrLength(null);
    setStartNum(null);
    setDifference(null);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
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
        <Space>
          {handlerParams.arrLength ? (
            <div>
              Длина
              <InputNumber
                min={1}
                max={100}
                value={arrLength}
                onChange={setArrLength}
              />
            </div>
          ) : null}
          {handlerParams.startNum ? (
            <div>
              Начальное число
              <InputNumber
                min={1}
                max={100}
                value={startNum}
                onChange={setStartNum}
              />
            </div>
          ) : null}
          {handlerParams.difference ? (
            <div>
              Разность
              <InputNumber
                min={1}
                max={100}
                value={difference}
                onChange={setDifference}
              />
            </div>
          ) : null}
        </Space>

        {handlerResult ? <ResultBaner result={handlerResult} /> : null}
      </Modal>
    </>
  );
};

export default ModalDataEntry;
