export function formatTemperature(value: number) {
  const formatter = new Intl.NumberFormat("sv-SE", {
    unit: "celsius",
    style: "unit",
    maximumFractionDigits: 1,
  });

  return formatter.format(value);
}
