import { Result, Button } from "antd";

export default function SomeProblems({ t }) {
  return (
    <>
      <Result status="warning" title={t(SomeProblems.title)} />
    </>
  );
}
