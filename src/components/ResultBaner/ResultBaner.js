import { Result } from "antd";
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

export default ResultBaner;
