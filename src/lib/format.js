// Indian digit grouping, e.g. 130000 -> "1,30,000", 45000 -> "45,000".
export function formatIndian(n) {
  return Number(n).toLocaleString('en-IN')
}
