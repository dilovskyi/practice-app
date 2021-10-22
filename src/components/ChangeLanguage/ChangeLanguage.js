import { Select } from "antd";
import { Trans } from "react-i18next";
const { Option } = Select;

function ChangeLanguage({ languages, changeLangHandler }) {
  return (
    <>
      <Select
        defaultValue="eng"
        style={{ width: 120 }}
        onChange={changeLangHandler}
      >
        {languages.map((langName) => {
          return (
            <Option key={langName} value={langName}>
              {<Trans i18nKey={`buttonsText.changeLang.${langName}`} />}
            </Option>
          );
        })}
      </Select>
    </>
  );
}

export default ChangeLanguage;
