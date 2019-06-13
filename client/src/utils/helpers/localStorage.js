function setItemLocalStorage(name, value) {
  localStorage.setItem(name, value);
}

function getItemLocalStorage(name) {
  return localStorage.getItem(name);
}

function removeItemLocalStorage(name) {
  localStorage.removeItem(name);
}

module.exports = {
  setItemLocalStorage,
  getItemLocalStorage,
  removeItemLocalStorage,
};
