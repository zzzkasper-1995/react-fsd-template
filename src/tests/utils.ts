/** Позволяет отключит метод console.log, на случай если мы не хотим выводить его **/
export const disableConsole = (method: jest.FunctionPropertyNames<Required<Console>>) => {
  jest.spyOn(console, method).mockImplementation(() => {})
}
