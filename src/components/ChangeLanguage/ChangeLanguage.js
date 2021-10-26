import { useContext } from "react";
import { Select } from "antd";
import { Trans } from "react-i18next";
import { LANGUAGES } from "../../constants";
import { LanguageContext, ChangeLaguageHandlerContext } from "../App";
const { Option } = Select;

function ChangeLanguage() {
  const pageLanguage = useContext(LanguageContext);
  const changeLaguageHandler = useContext(ChangeLaguageHandlerContext);
  return (
    <>
      <Select
        defaultValue={pageLanguage}
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
