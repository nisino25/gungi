<template>
  <div v-if="pawn.state !== 'active'" class="pawn" :class="{ 'taken': pawn.state === 'taken' }" @click="selectPawn">
    <span>{{ pawn.kanji }}</span>
  </div>
</template>

<script>
export default {
  name: "GamePawn",
  props: {
    pawn: {
      type: Object,
      required: true,
    },
  },
  methods: {
    selectPawn() {
      console.log('hello');
      this.$emit("pawn-selected", this.pawn);
    },
  },
};
</script>

<style scoped>
.pawn {
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 50%;
  background-color: lightgray;
}

.pawn.taken {
  background-color: darkred;
  color: white;
}
</style>
