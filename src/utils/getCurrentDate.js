export const getCurrentDate = () => {
  // please don't use let or var in case you are not going to change variable value in future
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const yyyy = today.getFullYear();
  today = `${dd}.${mm}.${yyyy}`;
  return today;
};
