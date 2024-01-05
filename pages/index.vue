<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <main class="flex justify-center items-center h-[80vh]">
    <UCard class="max-w-prose mx-auto prose dark:prose-invert">
      <h1 class="text-3xl">Graph Tool</h1>
      <p>
        A tool for creating figures and visualizations that look like they came
        from a textbook.
      </p>
      <div class="flex gap-2 flex-wrap">
        <ULink to="/graph">
          <UButton>Start Graphing</UButton>
        </ULink>
        <ULink to="/about">
          <UButton variant="soft">Learn More</UButton>
        </ULink>
      </div>
    </UCard>
  </main>
</template>
