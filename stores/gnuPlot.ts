import { defineStore } from "pinia";
import { createGnuplotInstance } from "../utils/gnuplot";

/*
This file creates one `gnuplot` instance for the app to share across route changes and component renders.
After the `gnuplot` WASM binary loads, calls to `render` should be nearly instantaneous.
*/

const gnuPlot = createGnuplotInstance();

export const useGnuPlotStore = defineStore({
  id: "gnuPlotStore",
  state: () => ({}),
  actions: {
    render: (code: string, size: { x: number; y: number }) =>
      gnuPlot.then((instance) => instance(code, size)),
  },
});
