export const getFromLocal = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    throw new Error();
  }
};

export const addSaveLocal = (key) => {
  try {
    const itemLocal = localStorage.getItem(key);
    return itemLocal ? JSON.parse(itemLocal) : null;
  } catch (error) {
    throw new Error();
  }
};
