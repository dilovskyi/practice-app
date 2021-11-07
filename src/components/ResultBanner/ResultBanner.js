import { Result } from "antd";
import PropTypes from "prop-types"; // ES6
import { SmileOutlined } from "@ant-design/icons";

function ResultBaner({ t, result }) {
  const validateResult = (value) => {
    if (Array.isArray(value)) {
      return value.join(", ");
    } else if (typeof value === "boolean") {
      return value.toString();
    }
    return value;
  };

  return (
    <>
      <Result
        icon={<SmileOutlined />}
        title={t("resultBaner.title")}
        extra={validateResult(result)}
      />
    </>
  );
}

ResultBaner.propTypes = {
  t: PropTypes.func.isRequired,
  result: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.array,
    PropTypes.string,
  ]),
};

export default ResultBaner;
