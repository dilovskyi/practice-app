import { Select } from "antd";
import { LANGUAGES } from "../../constants";
const { Option } = Select;

function ChangeLanguage({ t, i18n }) {
  return (
    <>
      <Select
        defaultValue={i18n.language}
        style={{ width: 120 }}
        onChange={(lang) => i18n.changeLanguage(lang)}
      >
        {LANGUAGES.map((langName, index) => {
          return (
            <Option key={index} value={langName}>
              {t(`buttonsText.changeLang.${langName}`)}
            </Option>
          );
        })}
      </Select>
    </>
  );
}

export default ChangeLanguage;
