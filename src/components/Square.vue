<template>
  <button class="square" @click="onClick">{{ value }}</button>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    value: String,
    onClick: {
      type: Function as PropType<() => void>,
    },
  },

});
</script>

<style>
.square {
  background: #fff;
  border: 1px solid #999;
  float: left;
  font-size: 24px;
  font-weight: bold;
  line-height: 34px;
  height: 34px;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  text-align: center;
  width: 33.3%;
  user-select: none;
}

.square:focus {
  outline: none;
}
.square:focus {
  background: #ddd;
}
</style>
