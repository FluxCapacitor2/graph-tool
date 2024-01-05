<script lang="ts" setup>
import { useOutputSettingsStore } from "~/stores/outputSettings";

const { xLabel, yLabel, title, xMin, xMax, yMin, yMax } = storeToRefs(
  useOutputSettingsStore(),
);
</script>

<template>
  <div class="flex flex-col gap-4">
    <UFormGroup label="Graph Title">
      <UInput icon="i-material-symbols-label-rounded" v-model="title"></UInput>
    </UFormGroup>
    <UFormGroup label="x-axis Label">
      <UInput icon="i-material-symbols-label-rounded" v-model="xLabel"></UInput>
    </UFormGroup>
    <div class="flex gap-2">
      <UFormGroup label="x min">
        <UInput type="number" v-model="xMin" placeholder="Auto"></UInput>
      </UFormGroup>
      <UFormGroup label="x max">
        <UInput type="number" v-model="xMax" placeholder="Auto"></UInput>
      </UFormGroup>
    </div>
    <UFormGroup label="y-axis Label">
      <UInput icon="i-material-symbols-label-rounded" v-model="yLabel"></UInput>
    </UFormGroup>
    <div class="flex gap-2">
      <UFormGroup label="y min">
        <UInput type="number" v-model="yMin" placeholder="Auto"></UInput>
      </UFormGroup>
      <UFormGroup label="y max">
        <UInput type="number" v-model="yMax" placeholder="Auto"></UInput>
      </UFormGroup>
    </div>
  </div>
</template>
