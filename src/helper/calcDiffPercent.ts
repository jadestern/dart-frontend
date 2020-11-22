export default function calcDiffPercent(v1: number, v2: number) {
  return ((Math.abs(v1 - v2) / ((v1 + v2) / 2)) * 100).toFixed(2);
}
