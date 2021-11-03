import { useContext, useState } from "react";
import { Select } from "antd";
import { Trans } from "react-i18next";
import i18next from "../../i18n";
import { LANGUAGES } from "../../constants";
import { ChangeLaguageHandlerContext } from "../App";
const { Option } = Select;

function ChangeLanguage() {
  const changeLaguageHandler = useContext(ChangeLaguageHandlerContext);
  const [pageLang] = useState(i18next.language);
  return (
    <>
      <Select
        defaultValue={pageLang}
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
