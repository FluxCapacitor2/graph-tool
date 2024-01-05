import { defineStore } from "pinia";

export const useOutputSettingsStore = defineStore({
  id: "outputSettingsStore",
  state: () => ({
    title: "Position over Time",
    xLabel: "Time (s)",
    yLabel: "Position (m)",
    xMin: "",
    xMax: "",
    yMin: "",
    yMax: "",
  }),
  actions: {},
});
