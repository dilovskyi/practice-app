import { Collapse, Divider, Space } from "antd";
import ModalDataEntry from "../ModalDataEntry";
import findHandler from "../../../helpers/findHandler";
const { Panel } = Collapse;

function CollapseList({ data, title }) {
  return (
    <>
      <Divider orientation="left">{title}</Divider>
      <Collapse>
        {data.map((item, index) => {
          const { id, description, handlerName, handlerParams } = item;
          const handler = findHandler(handlerName);

          return (
            <Panel header={handlerName} key={index}>
              <Space size={"middle"}>
                {item.description}
                <ModalDataEntry
                  id={id}
                  handler={handler}
                  handlerParams={handlerParams}
                  description={description}
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
