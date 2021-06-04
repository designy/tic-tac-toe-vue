<template>
  <div class="scores flex flex-col h-screen justify-center">
    <div><h1>جدول نتایج</h1>
    <table class="border-collapse border border-green-800 my-3 mx-auto">
      <thead>
        <tr>
          <th class="border border-green-600 p-3">نتیجه بازی</th>
          <th class="border border-green-600 p-3">تعداد</th>
        </tr>
      </thead>
      <tbody>
        <tr class="my-2">
          <td class="border border-green-600 p-3">کاربر X برد</td>
          <td class="border border-green-600 p-3">{{ xWon }}</td>
        </tr>
        <tr>
          <td class="border border-green-600 p-3">کاربر O برد</td>
          <td class="border border-green-600 p-3">{{ oWon }}</td>
        </tr>
        <tr>
          <td class="border border-green-600 p-3">مساوی شد</td>
          <td class="border border-green-600 p-3">{{ equal }}</td>
        </tr>
      </tbody>
    </table>
    <button class=" text-sm
                  my-1
                  px-4
                  py-2
                  border border-transparent
                  rounded-md
                  shadow-sm
                  text-sm
                  font-medium
                  text-white
                  bg-indigo-600
                  hover:bg-indigo-700
                  focus:outline-none
                  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" @click="resetScores">پاک کردن نتایج</button>
      </div>
  </div>
</template>
<script lang="ts">
import { mapState, mapMutations } from "vuex";

import { defineComponent } from "vue";
export default defineComponent({
  computed: {
    ...mapState(["xWon", "oWon", "equal"]),
  },
  data() {
    return {};
  },
  methods: {
    ...mapMutations(["resetScores"]),
  },
});
</script>
