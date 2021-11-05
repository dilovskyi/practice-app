import React from "react";
import PropTypes from "prop-types"; // ES6
import { Form, Input } from "antd";
import SomeProblems from "../SomeProblems";

export default function ParamForm({ t, handlerParams, inputOnChangeHandler }) {
  const [form] = Form.useForm();
  return (
    <>
      {handlerParams.length > 0 ? (
        <Form form={form} layout="vertical">
          {handlerParams.map((param, index) => {
            const { pos, id } = param;
            return (
              <Form.Item key={index} label={t(`taskParamName.${id}`)}>
                <Input
                  role="input"
                  type="text"
                  onChange={(event) =>
                    inputOnChangeHandler(event.target.value, pos)
                  }
                />
              </Form.Item>
            );
          })}
        </Form>
      ) : (
        <SomeProblems />
      )}
    </>
  );
}

ParamForm.defaultProps = {
  handlerParams: [],
};

ParamForm.propTypes = {
  t: PropTypes.func.isRequired,
  handlerParams: PropTypes.array,
  inputOnChangeHandler: PropTypes.func.isRequired,
};
