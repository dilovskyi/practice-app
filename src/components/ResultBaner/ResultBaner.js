import { Result } from "antd";
import { Trans } from "react-i18next";
import { SmileOutlined } from "@ant-design/icons";

function ResultBaner({ result }) {
  return (
    <>
      <Result
        icon={<SmileOutlined />}
        title={<Trans i18nKey="resultBaner.title" />}
        extra={result}
      />
    </>
  );
}

export default ResultBaner;
