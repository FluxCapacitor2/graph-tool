import { defineStore } from "pinia";

export interface Plot {
  type: "Normal" | "Parametric" | "Polar";
  expression: string;
  label: string;
}

const defaultPlots: Plot[] = [
  {
    type: "Normal",
    expression: "x**2",
    label: "Parabola",
  },
];

export const usePlotsStore = defineStore({
  id: "plotsStore",
  state: () => ({
    plots: defaultPlots,
  }),
  actions: {},
});
