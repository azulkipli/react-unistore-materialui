// Get ENV value by keyname
export const appconf = keyname => {
  const prop = "REACT_APP_" + keyname;
  return process.env[prop];
};
