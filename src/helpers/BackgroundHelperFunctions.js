export function sigmoid(z) {
  return 1 / (1 + Math.exp(-z));
}

export function getCameraDistance(viewportWidth) {
  return 10.5084746 - 0.002542373 * viewportWidth;
}
