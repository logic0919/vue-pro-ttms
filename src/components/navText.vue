<script setup>
const props = defineProps({
  info: String
})
console.log(props)
</script>

<template>
  <div class="navText">{{ info }}</div>
</template>

<style lang="scss" scoped>
.navText {
  width: 160px;
  height: 24px;
  line-height: 24px;
  border-left: 4px solid red;
  //   background-color: aquamarine;
  padding-left: 20px;
  letter-spacing: 10px;
}
</style>
