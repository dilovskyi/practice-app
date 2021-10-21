import { useContext } from "react";
import { Collapse, Divider, Space } from "antd";
import ModalDataEntry from "../ModalDataEntry";
import { findHandler, getTasksByType } from "../../helpers/findHandler";
import { TaskContext } from "../App/App";
const { Panel } = Collapse;

function CollapseList({ title, type }) {
  const dataTasks = useContext(TaskContext);
  const pageData = getTasksByType(dataTasks, type);

  return (
    <>
      <Divider orientation="left">{title}</Divider>
      <Collapse>
        {pageData.map((item) => {
          const { id, description, handlerName, handlerParams } = item;
          return (
            <Panel header={handlerName} key={id}>
              <Space size={"middle"}>
                {item.description}
                <ModalDataEntry
                  key={id}
                  description={description}
                  handler={findHandler(handlerName)}
                  handlerParams={handlerParams}
                />
              </Space>
            </Panel>
          );
        })}
      </Collapse>
    </>
  );
}

export default CollapseList;
