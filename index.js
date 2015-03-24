function wathen(w, r) {
  return 100 * w / (48.8 + 53.8 * Math.exp(-0.075 * r));
}

module.exports = wathen;
