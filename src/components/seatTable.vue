<script setup>
import { onMounted, ref } from 'vue'

const props = defineProps({
  row: Number,
  col: Number,
  seatDefault: Array
})
const seat = ref([])
onMounted(() => {
  if (seat.value == []) {
    seat.value = Array.from({ length: props.row }, () =>
      Array.from({ length: props.col }, () => 1)
    )
  } else {
    seat.value = props.seatDefault
  }
})
</script>

<template>
  <div class="seatTable">
    <div class="row" v-for="(i, index) in seat" :key="index">
      <h4>{{ index + 1 }}</h4>
      <div class="seats">
        <seat-img
          v-for="(j, index1) in i"
          :row="index + 1"
          :col="index1 + 1"
          :status="j"
          :key="index1"
        ></seat-img>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.seatTable {
  padding-left: 40px;
  padding-right: 40px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    h4 {
      width: 10%;
      text-align: center;
    }
    .seats {
      width: 90%;
      display: flex;
      justify-content: space-between;
      flex-wrap: nowrap;
      // border: 1px solid rgb(162, 86, 86);
    }
  }
}
</style>
