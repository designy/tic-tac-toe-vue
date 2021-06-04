<template>
  <button class="square" @click="$emit('click', $event)">{{ value }}</button>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: null,
    },
  },
}
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
