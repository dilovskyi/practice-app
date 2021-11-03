import { useContext, useState } from "react";
import { Select } from "antd";
import { Trans } from "react-i18next";
import i18next from "../../i18n";
import { LANGUAGES } from "../../constants";
import { ChangeLaguageHandlerContext } from "../App";
const { Option } = Select;

function ChangeLanguage() {
  const changeLaguageHandler = useContext(ChangeLaguageHandlerContext);
  return (
    <>
      <Select
        defaultValue={i18next.language}
        style={{ width: 120 }}
        onChange={changeLaguageHandler}
      >
        {LANGUAGES.map((langName, index) => {
          return (
            <Option key={index} value={langName}>
              {<Trans i18nKey={`buttonsText.changeLang.${langName}`} />}
            </Option>
          );
        })}
      </Select>
    </>
  );
}

export default ChangeLanguage;
