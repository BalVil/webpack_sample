export const storage = {
  getItem(key, defaultValue) {
    try {
      const result = JSON.parse(localStorage.getItem(key));
      return result ? result : defaultValue;
    } catch (error) {
      return null;
    }
  },
  addItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },

  deleteItem() {},
  clearitem() {},
};
