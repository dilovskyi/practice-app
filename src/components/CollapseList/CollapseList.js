import { useContext } from "react";
import { Collapse, Space } from "antd";
import { findHandler, getTasksByType } from "../../helpers/findHandler";
import { TaskContext, LanguageContext } from "../App/App";
import ModalDataEntry from "../ModalDataEntry";
const { Panel } = Collapse;

// Change the method of passing a parameter
function CollapseList({ type }) {
  const pageLanguage = useContext(LanguageContext);
  // Get all data
  const dataTasks = useContext(TaskContext);
  // Get filter data by page type
  const pageData = getTasksByType(dataTasks, type);

  return (
    <>
      <Collapse>
        {pageData.map((item) => {
          const { id, description, handlerName, handlerParams } = item;
          return (
            <Panel header={handlerName} key={id}>
              <Space size={"middle"}>
                {description[pageLanguage]}
                <ModalDataEntry
                  key={id}
                  pageLanguage={pageLanguage}
                  description={description[pageLanguage]}
                  handlerFunction={findHandler(handlerName)}
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
