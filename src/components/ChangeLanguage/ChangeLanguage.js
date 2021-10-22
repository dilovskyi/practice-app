import { Select } from "antd";
import { Trans } from "react-i18next";
const { Option } = Select;

function ChangeLanguage({ languages, changeLangHandler }) {
  return (
    <>
      <Select
        defaultValue="en"
        style={{ width: 120 }}
        onChange={changeLangHandler}
      >
        {languages.map((langName, index) => {
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
