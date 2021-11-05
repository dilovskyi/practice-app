import * as vanillaJsTasks from "../vanillaJs";

export function findHandlerFunc(handlerName) {
  for (let key in vanillaJsTasks) {
    if (handlerName === key) {
      return vanillaJsTasks[key];
    }
  }
}
