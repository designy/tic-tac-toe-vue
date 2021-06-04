<template>
  <template
    v-for="(row, index) in [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
    ]"
    :key="index"
  >
    <div class="board-row">
      <Square
        v-for="cell in row"
        :value="squares[cell]"
        :key="cell"
        @click="$emit('clicked', cell)"
      />
    </div>
  </template>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Square from "@/components/Square.vue";
export default defineComponent({
  name: "Board",
  components: { Square },
  props: {
    squares: {
      type: Array,
      required: true,
    },
  },
});
</script>

<style scoped></style>
