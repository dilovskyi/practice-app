import { useContext } from "react";
import { Collapse, Space } from "antd";
import ModalDataEntry from "../ModalDataEntry";
import { findHandler, getTasksByType } from "../../helpers/findHandler";
import { TaskContext } from "../App/App";
import { LanguageContext } from "../App/App";
import { Trans } from "react-i18next";
const { Panel } = Collapse;

// Change the method of passing a parameter
function CollapseList({ type }) {
  const dataTasks = useContext(TaskContext);
  const pageLanguage = useContext(LanguageContext);
  const pageData = getTasksByType(dataTasks, type);

  return (
    <>
      <Collapse>
        {pageData.map((item) => {
          const { id, description, handlerName, handlerParams } = item;
          console.log(pageLanguage);
          return (
            <Panel header={handlerName} key={id}>
              <Space size={"middle"}>
                {description[pageLanguage]}
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
