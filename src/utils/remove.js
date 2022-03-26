Array.prototype.remove = function (item) {
  const index = this.indexOf(item);
  return index === -1 ? index : this.splice(index, 1);
};
