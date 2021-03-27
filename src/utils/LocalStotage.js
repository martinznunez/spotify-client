export const getLocalStorage = () => {
  const tokenLs = JSON.parse(localStorage.getItem("data"));

  return { tokenLs };
};
