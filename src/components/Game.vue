<template>
  <main>
    <div class="game container mx-auto relative flex flex-col h-screen justify-center">
      <div class="game-history absolute right-0 top-1/4" v-if="history.length > 1">
  <h3 class="mb-2">مراحل بازی:</h3>
  <ol>
    <li v-for="(step, move) in history" :key="move">
      <button
        class="
          text-sm
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
          focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
        "
        @click="jumpTo(move)"
      >
        {{ move ? "رفتن به مرحله #" + move : "رفتن به شروع بازی" }}
      </button>
    </li>
  </ol>
</div>
      <div class="game-board">
        <h3 class="mb-2">{{ status }}</h3>
        <Board :squares="currentSquare" @clicked="handleClick" />
        <button
          class="
            text-sm
            my-1
            px-4
            py-2
            border border-transparent
            rounded-md
            shadow-sm
            text-sm
            font-medium
            text-white
            bg-red-600
            hover:bg-red-700
            focus:outline-none
            focus:ring-2 focus:ring-offset-2 focus:ring-red-500
            mt-5
          "
          @click="resetGame"
        >
          شروع مجدد بازی
        </button>

      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { mapMutations } from "vuex";
import { defineComponent } from "vue";
import Board from "@/components/Board.vue";
import { calculateWinner, SquareState } from "@/utils/logic-helper";
interface HistoryRecord {
  squares: Array<SquareState>;
}
type History = Array<HistoryRecord>;
export default defineComponent({
  components: { Board },
  data: () => ({
    history: [
      {
        squares: Array(9).fill(null),
      },
    ] as History,
    xIsNext: true,
    stepNumber: 0,
    moves: [],
  }),
  computed: {
    currentSquare(): Array<SquareState> {
      return this.history[this.stepNumber].squares;
    },
    status(): string {
      const winner = calculateWinner(this.currentSquare);
      const isEqual =
        !winner && this.currentSquare.reduce((acc, item) => acc && item);
      if (winner) {
        if (winner === "X") {
          this.setXWon();
        } else if (winner === "O") {
          this.setOWon();
        }
        return "برنده: " + winner;
      }
      if (isEqual) {
        this.setEqual();
        return "مساوی شد!";
      }
      return "نوبت بازیکن: " + (this.xIsNext ? "X" : "O");
    },
  },
  methods: {
    ...mapMutations(["setXWon", "setOWon", "setEqual"]),
    resetGame() {
      this.history = [
        {
          squares: Array(9).fill(null),
        },
      ];
      this.xIsNext = true;
      this.stepNumber = 0;
      this.moves = [];
    },
    jumpTo(step: number) {
      this.stepNumber = step;
      this.xIsNext = step % 2 === 0;
    },
    handleClick(i: number) {
      const history = this.history.slice(0, this.stepNumber + 1);
      const current = history[history.length - 1];
      const squares: Array<SquareState> = current.squares.slice();

      const alreadyFill = squares[i];
      if (calculateWinner(squares) || alreadyFill) {
        return;
      }
      squares[i] = this.xIsNext ? "X" : "O";
      this.stepNumber = this.history.length;
      this.history = this.history.concat([
        {
          squares: squares,
        },
      ]);
      this.xIsNext = !this.xIsNext;
    },
  },
});
</script>
<style>
.game {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>
