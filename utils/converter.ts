export function useGnuPlotCode() {
  const { plots } = storeToRefs(usePlotsStore());
  const { xLabel, xMin, xMax, yLabel, yMin, yMax, title } = storeToRefs(
    useOutputSettingsStore(),
  );

  let script: string[] = [];
  script.push(`set xlabel "${xLabel.value}"`);
  script.push(`set ylabel "${yLabel.value}"`);
  script.push(`set title "${title.value}"`);
  const elements = plots.value.map((plot) => {
    return `${plot.expression}`;
  });
  script.push(
    `plot [${xMin.value}:${xMax.value}][${yMin.value}:${
      yMax.value
    }] ${elements.join(", ")}`,
  );

  return script.join(";\n");
}
