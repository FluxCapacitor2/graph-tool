<script setup lang="ts">
import { useGnuPlotCode } from "~/utils/converter";

const code = computed(() => {
  return useGnuPlotCode();
});

const isCodeDialogOpen = ref(false);
</script>

<template>
  <main class="flex h-[calc(100vh-4rem)]">
    <!-- Sidebar -->
    <aside class="w-96 p-4 overflow-y-scroll">
      <h2 class="text-2xl">Input</h2>
      <GraphPlotEditor />
    </aside>
    <!-- Rendered graph -->
    <ClientOnly>
      <GraphGnuPlot />
      <template #fallback>
        <UCard class="prose dark:prose-invert max-w-none max-h-96 w-full">
          <UProgress indeterminate />
          <p class="font-bold">Loading...</p>
          <p>
            Using some futuristic technology called WebAssembly, this app
            downloads and runs
            <code>gnuplot</code>
            on your device!
          </p>
        </UCard>
      </template>
    </ClientOnly>
    <!-- Right sidebar -->
    <aside class="w-96 p-4 overflow-y-scroll">
      <h2 class="text-2xl">Output</h2>
      <GraphOutputSettings />
      <UDivider class="my-2" />
      <UButton
        @click="isCodeDialogOpen = true"
        icon="i-material-symbols-terminal">
        See Generated Code
      </UButton>
    </aside>
  </main>
  <UModal v-model="isCodeDialogOpen">
    <div class="p-4 prose dark:prose-invert">
      <h2>
        Generated
        <code>gnuplot</code>
        Code
      </h2>
      <p>
        You can use this code to generate the graph you see in the preview on
        other
        <code>gnuplot</code>
        <a href="http://gnuplot.info/docs_5.5/Terminals.html">terminals</a>
        .
      </p>
      <pre><code>{{ code }}</code></pre>
    </div>
  </UModal>
</template>
