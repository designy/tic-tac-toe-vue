<template>
  <div>
    <div
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
          :key="cell"
          :value="squares[cell]"
          @click="$emit('clicked', cell)"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Board',
  props: {
    squares: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped></style>
