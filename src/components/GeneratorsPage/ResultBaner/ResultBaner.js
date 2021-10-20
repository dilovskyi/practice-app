import { Result } from "antd";
import { SmileOutlined } from "@ant-design/icons";

function ResultBaner({ result }) {
  return (
    <>
      <Result icon={<SmileOutlined />} title="Ваш рузультать:" extra={result} />
    </>
  );
}

export default ResultBaner;
