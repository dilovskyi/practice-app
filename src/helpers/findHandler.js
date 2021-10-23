import * as vanillaJsTasks from "../vanillaJs";

const findHandler = (handlerName) => {
  for (let key in vanillaJsTasks) {
    if (handlerName === key) {
      return vanillaJsTasks[key];
    }
  }
};

function getTasksByType(dataTasks, type) {
  return dataTasks.filter((item) => item.type === type);
}

export { findHandler, getTasksByType };
