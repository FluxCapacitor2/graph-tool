<script setup lang="ts">
const { plots } = storeToRefs(usePlotsStore());

function addPlot() {
  plots.value.push({
    type: "Normal",
    expression: "0",
    label: `Line ${plots.value.length + 1}`,
  });
}
</script>

<template>
  <UAccordion default-open multiple :items="plots">
    <template #item="{ item: plot, index }">
      <div class="pl-2 border-l border-l-gray-300 dark:border-l-gray-600">
        <UFormGroup label="Edit Label">
          <UInput icon="i-material-symbols-label" v-model="plot.label"></UInput>
        </UFormGroup>
        <UFormGroup label="Plot Type">
          <UButtonGroup>
            <UButton
              :variant="plot.type === 'Normal' ? 'solid' : 'soft'"
              @click="plot.type = 'Normal'">
              Normal
            </UButton>
            <UButton
              :variant="plot.type === 'Parametric' ? 'solid' : 'soft'"
              @click="plot.type = 'Parametric'">
              Parametric
            </UButton>
            <UButton
              :variant="plot.type === 'Polar' ? 'solid' : 'soft'"
              @click="plot.type = 'Polar'">
              Polar
            </UButton>
          </UButtonGroup>
        </UFormGroup>
        <UFormGroup label="Expression">
          <UInput
            icon="i-material-symbols-function"
            v-model="plot.expression"></UInput>
        </UFormGroup>
      </div>
    </template>
  </UAccordion>

  <UButton icon="i-material-symbols-add" @click="addPlot">Add Plot</UButton>
</template>
