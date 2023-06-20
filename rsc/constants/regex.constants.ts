export const regexPasAndEma: { [key: string]: RegExp } = {
  PASSWORD: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}/,
  EMAIL: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
};
