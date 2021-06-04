<template>
  <div class="home">
    <game />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Game from "@/components/Game.vue"; // @ is an alias to /src

@Options({
  components: {
    Game,
  },
})
export default class Home extends Vue {}
</script>
<style>
/*app css*/

ol,
ul {
  padding-left: 30px;
}

.board-row:after {
  clear: both;
  content: "";
  display: table;
}
</style>
