<script lang="ts" setup>
import { useGnuPlotCode } from "~/utils/converter";

const code = computed(() => useGnuPlotCode());

const graph = ref<string | null>(null);
const rendering = ref(false);
const error = ref<any | null>(null);

const gnuPlot = useGnuPlotStore();

watchEffect(() => {
  rendering.value = true;
  gnuPlot
    .render(code.value, { x: 960, y: 540 })
    .then((result) => {
      graph.value = result;
      rendering.value = false;
      error.value = null;
    })
    .catch((err) => {
      console.warn(err);
      rendering.value = false;
      error.value = err.message;
    });
});
</script>

<template>
  <div class="relative w-full max-w-[80rem]">
    <div
      v-html="graph"
      class="bg-white w-full"
      :class="rendering || error !== null ? 'blur-sm' : ''"></div>

    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div v-if="rendering">
        <UProgress indeterminate />
      </div>
      <UCard v-if="error !== null" class="prose dark:prose-invert">
        <p class="text-red-500 font-bold">
          There was an error creating your graph!
        </p>
        <p>
          If you modified the
          <code>gnuplot</code>
          code manually, make sure your syntax is correct.
        </p>
        <ul>
          <li>
            View the
            <code>gnuplot</code>
            quick reference
            <a href="http://gnuplot.info/docs_4.0/gpcard.pdf">here</a>
            .
          </li>
        </ul>
        <p>
          <code>gnuplot</code>
          provided the following information:
        </p>
        <pre>{{ error }}</pre>
      </UCard>
    </div>
  </div>
</template>
