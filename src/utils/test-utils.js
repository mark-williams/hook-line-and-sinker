export const getWrapperByName = (wrapper, name) =>
  wrapper.find(`[name='${name}']`);
export const getValueOfInput = (wrapper, name) => {
  return wrapper.find(`[name='${name}']`).props().value;
};
