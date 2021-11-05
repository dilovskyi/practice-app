export function getTasksByType(dataTasks, type) {
  return dataTasks.filter((item) => item.type === type);
}
